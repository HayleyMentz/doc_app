import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navbar = () => (

  <>
  <Link to='/'>
  <h1>
Doctor Appointment
  </h1>
  </Link>
  <ul>
    <Link to='/'>
      <li>Home</li>
    </Link>
  </ul>
  <ul>
    <Link to='/about'>
      <li>About</li>
    </Link>
  </ul>
  <ul>
    <Link to='/list'>
      <li>Appointments</li>
    </Link>
  </ul>
  </>
)

export default Navbar;