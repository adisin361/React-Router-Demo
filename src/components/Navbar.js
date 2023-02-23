// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom"
export const Navbar = () => {

  // isActive is destructured from NavLink
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none'
    }
  }

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles} to='/about'>About</NavLink>
      <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
    </nav>
  )
}
// for active links use NavLinks instead of Links
// NavLink recieves a 'active' class when that link is active. 
// You can use this class to add styles to the active links