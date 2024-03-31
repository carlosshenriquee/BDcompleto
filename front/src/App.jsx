import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './routes/Usuarios';
import Cadastro from './routes/Cadastro';

function App() {
  

  return (
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/usuarios' element={<Usuarios/>}  />
    <Route path='/cadastros' element={<Cadastro/>}  />
   </Routes>

   </BrowserRouter>


  )
}

export default App
