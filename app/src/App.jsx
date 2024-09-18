import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/ui/navbar/Navbar'
import Contract from './pages/Contract'
import MyProducts from './pages/MyProducts'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contratar" element={<Contract />} />
        <Route path="/mis_productos" element={<MyProducts/>} />
        <Route path="/perfil" element={<Profile/>} />
        <Route path="/inicio_de_sesion" element={<LogIn/>} />
        <Route path="/registro" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
