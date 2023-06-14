import { Routes as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Router>
  )
}

export default Routes
