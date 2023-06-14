import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 360px;
  padding: 40px 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
    padding: 30px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Text = styled.h1`
  font-size: 36px;
  color: ${colors.roseColor};
  line-height: 42px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`
export const HeaderPerfil = styled(Container)`
  height: 190px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 24px;
    margin: 24px 0;
  }
`
export const LinkItem = styled(Link)`
  font-size: 18px;
  color: ${colors.roseColor};
  line-height: 21px;
  font-weight: bold;

  img {
    width: 58px;
    height: 125px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;

    img {
      width: 13px;
      height: 100px;
    }
  }
`
