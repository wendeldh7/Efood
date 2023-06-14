import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'

import { priceFormat } from '../../utils'

import close from '../../images/close.png'

import Product from '../Product'

import * as S from './style'

type Props = {
  menuItens: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

const Menu = ({ menuItens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      nome: '',
      descricao: '',
      preco: 0,
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(modal))
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <S.ProductsContainer>
        <div className="container">
          <S.MenuListContent>
            {menuItens.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    id: item.id,
                    foto: item.foto,
                    nome: item.nome,
                    descricao: item.descricao,
                    preco: item.preco,
                    porcao: item.porcao
                  })
                }}
              >
                <Product
                  type="menu"
                  key={item.id}
                  image={item.foto}
                  title={item.nome}
                  description={item.descricao}
                  tipo={''}
                  id={item.id}
                />
              </li>
            ))}
          </S.MenuListContent>
        </div>
      </S.ProductsContainer>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img onClick={closeModal} src={close} />
          </header>
          <div className="content">
            <img className="imageFood" src={modal.foto} />
            <div>
              <S.TitleMenu>{modal.nome}</S.TitleMenu>
              <S.MenuDescription>{modal.descricao}</S.MenuDescription>
              <S.MenuDescription>Serve: {modal.porcao}</S.MenuDescription>
              <button onClick={addCart}>
                Adicionar ao carrinho - {priceFormat(modal.preco)}
              </button>
            </div>
          </div>
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Menu
