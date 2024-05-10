import { NavLink } from "react-router-dom"

 const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
                <NavLink to="/" className="navbar-link">About</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/resume" className="navbar-link">Resume</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/portfolio" className="navbar-link">Projects</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/contact" className="navbar-link">Contact us</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar
