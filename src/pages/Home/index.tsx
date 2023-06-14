import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) return <Loader />

  return (
    <>
      <Header type="home" />
      <ProductsList restaurantList={restaurants} />
      <Footer />
    </>
  )
}

export default Home
