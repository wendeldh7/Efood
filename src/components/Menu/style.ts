import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ProductsContent } from '../ProductsList/styles'

export const ProductsContainer = styled.section`
  background-color: ${colors.whiteColor};
`

export const MenuListContent = styled(ProductsContent)`
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin-top: 250px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: ${colors.roseColor};
  color: ${colors.creamColor};

  header {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
    cursor: pointer;
  }

  .content {
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;

    display: flex;
    gap: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

  .imageFood {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: 100%;
    }
  }

  button {
    width: 218px;
    background-color: ${colors.creamColor};
    color: ${colors.roseColor};
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    margin-top: 16px;
    cursor: pointer;
  }
`
export const TitleMenu = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`
export const MenuDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`
