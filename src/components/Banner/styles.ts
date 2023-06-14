import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;

  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;
  color: ${colors.cardColor};

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.4;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`
export const TypeTitle = styled.h2`
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 157px;
`
export const RestaurantTitle = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
`
