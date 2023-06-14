import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalStyle from './styles'
import { store } from './store'
import Routes from './Routes'
import Cart from './components/Cart'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
