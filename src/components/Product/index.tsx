import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  type: 'home' | 'menu'
  title: string
  image: string
  rating?: number
  description: string
  featured?: boolean
  tipo: string
  id: number
}

const Product = ({
  title,
  image,
  rating,
  description,
  type,
  featured,
  tipo,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 150) + '...'
    }
  }

  if (type === 'home') {
    return (
      <S.Card>
        <img src={image} />
        <S.CardContent>
          <S.HatingContent>
            <S.Title>{title}</S.Title>
            <S.Rating>
              <S.Title>{rating}</S.Title>
              <img src={'images/star.png'} alt="Estrela de  classificação" />
            </S.Rating>
          </S.HatingContent>
          <S.Infos>
            {featured ? (
              <>
                <Tag key={'destaque'}>{'Destaque da semana'}</Tag>
                <Tag key={tipo}>{tipo}</Tag>
              </>
            ) : (
              <Tag key={tipo}>{tipo}</Tag>
            )}
          </S.Infos>
          <S.Description>{getDescription(description)}</S.Description>
          <Button type="button" typeButton="button" to={`/profile/${id}`}>
            Saiba mais
          </Button>
        </S.CardContent>
      </S.Card>
    )
  }

  return (
    <S.CardMenu>
      <img src={image} />
      <S.TitleMenu>{title}</S.TitleMenu>
      <S.MenuDescription>{getDescription(description)}</S.MenuDescription>
      <Button type="button" typeButton="linkButton">
        Adicionar ao carrinho
      </Button>
    </S.CardMenu>
  )
}

export default Product
