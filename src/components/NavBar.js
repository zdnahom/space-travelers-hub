import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const NavBar = () => (
  <header>
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/profile">My profile</NavLink></li>
      </ul>
    </nav>
  </header>
);
export default NavBar;
