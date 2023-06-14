import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import background from '../../images/fundo.png'
import logo from '../../images/logo.png'

import * as S from './style'

type Props = {
  type: 'home' | 'profile'
}

const Header = ({ type }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  if (type === 'home') {
    return (
      <S.Container style={{ backgroundImage: `url(${background})` }}>
        <img height={58} width={125} src={logo} alt="Logo Efood" />
        <S.Text>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </S.Text>
      </S.Container>
    )
  }

  return (
    <S.HeaderPerfil style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <nav>
          <S.Links>
            <li>
              <S.LinkItem to={'/'}>Restaurantes</S.LinkItem>
            </li>
            <li>
              <img src={logo} alt="Logo Efood" />
            </li>
            <li>
              <S.LinkItem onClick={() => dispatch(open())} to="#">
                {items.length} produto(s) no carrinho
              </S.LinkItem>
            </li>
          </S.Links>
        </nav>
      </div>
    </S.HeaderPerfil>
  )
}

export default Header
