import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias'
import Footer from './components/footer/Footer'
import ListaTreinos from './components/treinos/listatreinos/ListaTreinos'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categorias' element={<ListaCategorias/>}/>
        {/* rota Treino apenas para visualização*/}
        <Route path="/treinos" element={<ListaTreinos/>} />
        {/* rota usuario */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;