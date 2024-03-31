import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
   <div>
    <Navbar/>
    <div className='container'>
        <h3>Bem-vindo ao Sistema CRUD!!!</h3>
        <h4>Esse projeto vai utilizar uma API</h4>
    </div>

   </div>
    
  )
}

export default Home