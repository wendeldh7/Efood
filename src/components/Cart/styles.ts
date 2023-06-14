import styled from 'styled-components'
import { colors } from '../../styles'
import close from '../../images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: 1;

  .empty-text {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.creamColor};
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-visible {
    display: flex;
  }
`
export const SideBar = styled.aside`
  z-index: 1;
  background-color: ${colors.roseColor};
  width: 360px;
  padding: 32px 8px 0 8px;

  ul {
    margin-bottom: 40px;
  }

  .empty-text {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.creamColor};
    text-align: center;
  }
`
export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 8px;
  background-color: ${colors.creamColor};
  color: ${colors.roseColor};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${close});
    height: 16px;
    width: 16px;
    border: none;

    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.creamColor};
  margin-bottom: 20px;
`
