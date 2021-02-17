import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-around bg-primary text-light text-center p-2'>
      <h1>Studio Ghibli Wiki</h1>
      <NavLink
        exact
        to='/'
        activeClassName='border-bottom border-light bg-info nav-link text-light'
        className='nav-link text-light'
      >
        Home
      </NavLink>
      <NavLink
        to='/films'
        activeClassName='border-bottom border-light bg-info nav-link text-light'
        className='nav-link text-light'
      >
        Films
      </NavLink>
      <NavLink
        to='/people'
        activeClassName='border-bottom border-light bg-info nav-link text-light'
        className='nav-link text-light'
      >
        People
      </NavLink>
      <NavLink
        to='/vehicles'
        activeClassName='border-bottom border-light bg-info nav-link text-light'
        className='nav-link text-light'
      >
        Vehicles
      </NavLink>
      <NavLink
        to='/locations'
        activeClassName='border-bottom border-light bg-info nav-link text-light'
        className='nav-link text-light'
      >
        Locations
      </NavLink>
    </nav>
  )
}
export default Navbar
