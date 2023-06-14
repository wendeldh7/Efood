import { AddButton } from './../Button/styles'
import { styled } from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Container = styled.div`
  h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    color: ${colors.creamColor};
    margin-bottom: 8px;
  }

  p {
    color: ${colors.creamColor};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  ${AddButton} {
    margin-bottom: 8px;
  }

  .is-invisible {
    display: none;
  }
`
export const ButtonGroup = styled.div`
  margin-top: 16px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: 8px;

  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
    color: ${colors.creamColor};
    display: block;
  }

  input {
    color: #4b4b4b;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 8px;
    width: 100%;
    padding: 8px;

    background-color: ${colors.creamColor};
    border: 1px solid ${colors.creamColor};

    &.error {
      border: 2px solid red;
    }
  }
`
export const Row = styled.div`
  display: flex;
  gap: 34px;
  align-items: flex-end;
`
