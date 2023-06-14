import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { close, clear, closeCheckout } from '../../store/reducers/cart'

import { priceFormat, getTotalPrice } from '../../utils'

import Button from '../Button'
import Loader from '../Loader'

import * as S from './styles'

type Props = {
  onClick: () => void
}

const Checkout = ({ onClick }: Props) => {
  const [payActive, setPayActive] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: '',
      fullName: '',
      number: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter 8 carcteres')
        .max(9, 'O campo precisa ter 8 carcteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string()
        .min(1, 'O campo precisa ter no minimo 1 carctere')
        .max(5, 'O campo precisa ter no maximo 5 carcteres')
        .required('O campo é obrigatório'),
      complement: Yup.string(),

      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O campo precisa ter no minimo 3 carctere')
        .max(3, 'O campo precisa ter no maximo 3 carcteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter no minimo 2 carctere')
        .max(2, 'O campo precisa ter no maximo 2 carcteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter no minimo 2 carctere')
        .max(2, 'O campo precisa ter no maximo 2 carcteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),

        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },

        payment: {
          card: {
            name: values.fullName,
            number: values.number,
            code: Number(values.code),

            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputAsError = (fieldName: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isChanged && isInvalid

    return hasError
  }

  if (isLoading) return <Loader />

  return (
    <>
      {isSuccess && data ? (
        <S.Container>
          <h2>Pedido realizado - {data.orderId}</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfr informar que seu pedido já está em processo de
            ute de uma deliciosa e agradável experiência gastronômica. Bom
            apetite!
          </p>
          <Button
            typeButton="linkButton"
            onClick={() => {
              navigate('/')
              dispatch(close())
              dispatch(clear())
              dispatch(closeCheckout())
            }}
            type={'button'}
          >
            Concluir
          </Button>
        </S.Container>
      ) : (
        <S.Container>
          <form onSubmit={form.handleSubmit}>
            <div className={payActive ? 'is-invisible' : ''}>
              <h2>Entrega</h2>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="receiver"
                  id="receiver"
                  className={checkInputAsError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="address"
                  id="address"
                  className={checkInputAsError('address') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="city"
                  id="city"
                  className={checkInputAsError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    mask={'99999-999'}
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    className={checkInputAsError('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="houseNumber">Número</label>
                  <input
                    value={form.values.houseNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="houseNumber"
                    id="houseNumber"
                    className={checkInputAsError('houseNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="complement"
                  id="complement"
                  className={checkInputAsError('complement') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.ButtonGroup>
                <Button
                  type="button"
                  onClick={() => setPayActive(true)}
                  typeButton={'linkButton'}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={onClick}
                  typeButton={'linkButton'}
                  type="button"
                >
                  Voltar para o carrinho
                </Button>
              </S.ButtonGroup>
            </div>

            <div className={!payActive ? 'is-invisible' : ''}>
              <h2>
                Pagamento - Valor a pagar {priceFormat(getTotalPrice(items))}
              </h2>
              <S.InputGroup>
                <label htmlFor="fullName">Nome no cartão</label>
                <input
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={checkInputAsError('fullName') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup maxWidth="450px">
                  <label htmlFor="number">Número do cartão</label>
                  <InputMask
                    mask={'9999-9999-9999-9999'}
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="number"
                    id="number"
                    className={checkInputAsError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="code">CVV</label>
                  <InputMask
                    mask={'999'}
                    value={form.values.code}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="code"
                    id="code"
                    className={checkInputAsError('code') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    mask={'99'}
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="expiresMonth"
                    id="expiresMonth"
                    className={checkInputAsError('expiresMonth') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    mask={'99'}
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="expiresYear"
                    id="expiresYear"
                    className={checkInputAsError('expiresMonth') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.ButtonGroup>
                <Button
                  onClick={() => setPayActive(true)}
                  typeButton={'linkButton'}
                  type="submit"
                >
                  Finalizar pagamento
                </Button>
                <Button
                  onClick={() => setPayActive(false)}
                  typeButton={'linkButton'}
                  type="button"
                >
                  Voltar para a edição de endereço
                </Button>
              </S.ButtonGroup>
            </div>
          </form>
        </S.Container>
      )}
    </>
  )
}

export default Checkout
