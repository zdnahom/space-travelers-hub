import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <img src="https://i.ibb.co/D4dQDjd/planet.png" alt="logo" />
      <ul>
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/profile">My profile</Link></li>
      </ul>
    </nav>
  </header>
);
export default NavBar;

