import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'

type ProductParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as ProductParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  return (
    <>
      <Header type="profile" />
      {!restaurant ? (
        <Loader />
      ) : (
        <>
          <Banner restaurant={restaurant} />
          <Menu menuItens={restaurant.cardapio} />
          <Footer />
        </>
      )}
    </>
  )
}

export default Profile
