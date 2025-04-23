import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias'
import Footer from './components/footer/Footer'



import FormUsuario from './components/usuarios/formusuarios/FormUsuario'
import FormTreinos from './components/treinos/formtreinos/FormTreinos'
import ListaTreinos from './components/treinos/listatreinos/ListaTreinos'
import DeletarTreino from './components/treinos/deletartreinos/DeletarTreino'


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
        <Route path="/cadastrartreinos" element={<FormTreinos />} />
        <Route path="/editartreinos/:id" element={<FormTreinos />} />
        <Route path="/deletartreino/:id" element={<DeletarTreino />} />


        {/* rota usuario */}

        <Route path='/usuarios' element={<FormUsuario/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;