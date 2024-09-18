import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='x-full bg-white py-5 px-5 shadow-lg shadow-slate-200 flex justify-between'>
        <div>
            <Link to={'/'} className='text-[#1a1a1a] mr-3'>Inicio</Link>
            <Link to={'/contratar'} className='text-[#1a1a1a] mx-3'>Contratar</Link>
            <Link to={'/misproductos'} className='text-[#1a1a1a] mx-3'>Mis productos</Link>
        </div>
        <div>
            <Link to={'/perfil'} className='text-[#1a1a1a] mx-3'>Perfil</Link>
        </div>
    </div>
  )
}

export default Navbar