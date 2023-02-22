// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Services from './Routes/Services'

function App() {
  return (
      
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={ <Services /> }></Route>
      </Routes>
    </>
    
  );
}

export default App;
