import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.cardColor};
  position: relative;

  > img {
    width: 100%;
    height: 217px;
  }
`
export const HatingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardContent = styled.div`
  margin-top: -5px;
  border: 1px solid ${colors.roseColor};
  padding: 8px;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.roseColor};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.roseColor};
  margin: 16px 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
`
export const CardMenu = styled.div`
  background-color: ${colors.roseColor};
  padding: 8px;
  color: ${colors.creamColor};
  cursor: pointer;

  > img {
    height: 167px;
    width: 100%;
  }
`
export const TitleMenu = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`
export const MenuDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`
