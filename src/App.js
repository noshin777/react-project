import './App.css';
// import Register from './components/Register';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
          </Route>
          
          <Route path='/contact' element={<Contact />} />
          <Route path='/log' element={<Login />} />
          <Route path='/reg' element={<Register />} />
          <Route path='/list' element={<Users />} />


      </Routes>

    </div>
  );
}

export default App;
