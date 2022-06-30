import logo from './logo.svg';
import './App.css';
import { Rotes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Users from './components/users/Users';
import Doctors from './components/doctors/Doctors';
import Appointments from './components/appointments/Appointments';

const App = () => (

<>
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/:userId/apointments' element={<Appointments /> } />
      <Route path='/*' element={<Nomatch />} /> 
</Routes>
</>

)

     
export default App;
