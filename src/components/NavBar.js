import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const NavBar = () => (
  <header className="navbar-container">
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <span className="logo-text">Space Travelers&apos; Hub</span>
      </div>
      <ul className="navbar-ul">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Rockets</NavLink></li>
        <li><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Missions</NavLink></li>
        <li className="vertical-line" />
        <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>My profile</NavLink></li>
      </ul>
    </nav>
  </header>
);
export default NavBar;
