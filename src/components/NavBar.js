import { Link } from 'react-router-dom';
import logo from '../assets/images/planet.png';
const NavBar = () => (
  <header>
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/profile">My profile</Link></li>
      </ul>
    </nav>
  </header>
);
export default NavBar;
