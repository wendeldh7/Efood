import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonMore = styled(Link)`
  border: none;
  background-color: ${colors.roseColor};
  padding: 4px 6px;
  color: ${colors.creamColor};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  cursor: pointer;
  display: inline-block;
`

export const AddButton = styled.button`
  width: 100%;
  background-color: ${colors.creamColor};
  color: ${colors.roseColor};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border: none;
  cursor: pointer;
`
