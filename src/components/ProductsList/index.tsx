import Product from '../Product'
import { ProductsContainer, ProductsContent } from './styles'

type Props = {
  restaurantList: Restaurant[]
}

const ProductsList = ({ restaurantList }: Props) => {
  return (
    <ProductsContainer>
      <div className="container">
        <ProductsContent>
          {restaurantList.map((restaurant) => (
            <li key={restaurant.id}>
              <Product
                type="home"
                key={restaurant.id}
                id={restaurant.id}
                tipo={restaurant.tipo}
                title={restaurant.titulo}
                image={restaurant.capa}
                rating={restaurant.avaliacao}
                featured={restaurant.destacado}
                description={restaurant.descricao}
              />
            </li>
          ))}
        </ProductsContent>
      </div>
    </ProductsContainer>
  )
}

export default ProductsList
