import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './components/About';
import Details from './components/Details';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path="/details/:name" element={<Details />} />
        <Route  path='/welcome' element={<Welcome />} />
        <Route  path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>);
}

export default App;