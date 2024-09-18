import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/ui/navbar/Navbar'
import Contract from './pages/Contract'
import MyProducts from './pages/MyProducts'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contratar" element={<Contract />} />
        <Route path="/misproductos" element={<MyProducts/>} />
        <Route path="/perfil" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
