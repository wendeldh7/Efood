import { BounceLoader } from 'react-spinners'
import { colors } from '../../styles'
import { LoaderContainer } from './styles'

const Loader = () => {
  return (
    <div className="container">
      <LoaderContainer>
        <BounceLoader color={colors.roseColor} />
      </LoaderContainer>
    </div>
  )
}

export default Loader
