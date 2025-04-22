import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categorias' element={<ListaCategorias/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
