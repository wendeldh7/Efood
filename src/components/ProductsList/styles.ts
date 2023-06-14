import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ProductsContainer = styled.section`
  background-color: ${colors.whiteColor};
`

export const ProductsContent = styled.ul`
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-column-gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
