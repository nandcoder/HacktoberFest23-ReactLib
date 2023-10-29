import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Navbar.js';
// import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormHandler from './components/FormHandler';
// import Home from './components/Home';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/form' element={<FormHandler/>} />
  </Routes>
  </>
  );
}

export default App;
