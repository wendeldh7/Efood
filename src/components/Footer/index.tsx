import logo from '../../images/logo.png'
import insta from '../../images/insta.png'
import face from '../../images/face.png'
import twitter from '../../images/twitter.png'

import { FooterContainer } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo Efood" />
      <ul>
        <li>
          <a href="#">
            <img src={insta} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={face} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} />
          </a>
        </li>
      </ul>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </p>
    </FooterContainer>
  )
}

export default Footer
