import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import {
  close,
  closeCheckout,
  openCheckout,
  remove
} from '../../store/reducers/cart'

import Checkout from '../Checkout'
import Button from '../Button'

import { getTotalPrice, priceFormat } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isVisible, items, isCheckout } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  if (isCheckout) {
    return (
      <S.CartContainer className={isVisible ? 'is-visible' : ''}>
        <S.Overlay
          onClick={() => {
            dispatch(close())
            dispatch(closeCheckout())
          }}
        />
        <S.SideBar>
          <Checkout onClick={() => dispatch(closeCheckout())} />
        </S.SideBar>
      </S.CartContainer>
    )
  }

  return (
    <S.CartContainer className={isVisible ? 'is-visible' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{priceFormat(item.preco)}</p>
                  </div>
                  <button
                    onClick={() => dispatch(remove(item.id))}
                    type="button"
                  ></button>
                </S.CartItem>
              ))}
            </ul>
            <S.Price>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrice(items))}</span>
            </S.Price>
            <Button
              type="button"
              onClick={() => dispatch(openCheckout())}
              typeButton="linkButton"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
