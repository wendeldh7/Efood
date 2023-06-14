import * as S from './styles'

type Props = {
  typeButton: 'button' | 'linkButton'
  type: 'button' | 'submit'
  children: string | number
  to?: string
  onClick?: () => void
}

const Button = ({ typeButton, children, to, onClick, type }: Props) => {
  if (typeButton === 'button') {
    return (
      <S.ButtonMore onClick={onClick} type={'button'} to={to as string}>
        {children}
      </S.ButtonMore>
    )
  }

  return (
    <S.AddButton type={type} onClick={onClick}>
      {children}
    </S.AddButton>
  )
}
export default Button
