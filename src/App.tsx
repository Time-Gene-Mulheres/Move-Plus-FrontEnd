import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias'
import Footer from './components/footer/Footer'

import ListaTreinos from './components/treinos/listatreinos/ListaTreinos'

import FormUsuario from './components/usuarios/formusuarios/FormUsuario'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'


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

        <Route path='/usuarios' element={<FormUsuario/>}/>

        <Route path='/cadastrarcategoria' element={<FormCategoria/>}/>
        <Route path='/editarcategoria/:id' element={<FormCategoria/>}/>
        <Route path='/deletarcategoria/:id' element={<DeletarCategoria/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );

}
export default App;