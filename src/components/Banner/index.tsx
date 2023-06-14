import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.TypeTitle>{restaurant.tipo}</S.TypeTitle>
        <S.RestaurantTitle>{restaurant.titulo}</S.RestaurantTitle>
      </div>
    </S.BannerContainer>
  )
}

export default Banner
