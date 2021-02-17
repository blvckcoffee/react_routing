import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './views/Welcome'
import Films from './views/Films'
import People from './views/People'
import Vehicles from './views/Vehicles'
import Locations from './views/Locations'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route path='/films'>
          <Films />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/vehicles'>
          <Vehicles />
        </Route>
        <Route path='/locations'>
          <Locations />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
