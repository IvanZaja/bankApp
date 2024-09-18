import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='x-full bg-white py-5 px-5 shadow-lg shadow-slate-200 flex justify-between mb-10'>
        <div>
            <Link to={'/'} className='text-[#1a1a1a] mr-3'>Inicio</Link>
            <Link to={'/contratar'} className='text-[#1a1a1a] mx-3'>Contratar</Link>
            <Link to={'/mis_productos'} className='text-[#1a1a1a] mx-3'>Mis productos</Link>
        </div>
        <div>
            <Link to={'/perfil'} className='text-[#1a1a1a] mx-3'>Perfil</Link>
            <Link to={'/inicio_de_sesion'} className='text-[#1a1a1a] mx-3'>Iniciar sesión</Link>
            <Link to={'/registro'} className='text-[#1a1a1a] mx-3'>Registrarse</Link>
        </div>
    </div>
  )
}

export default Navbar