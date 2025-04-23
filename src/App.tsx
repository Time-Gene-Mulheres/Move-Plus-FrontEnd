import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias'
import Footer from './components/footer/Footer'



import FormUsuario from './components/usuarios/formusuarios/FormUsuario'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import ListaUsuarios from './components/usuarios/listausuarios/ListaUsuarios'
import DadosUsuario from './components/usuarios/dadosusuario/DadosUsuario'
import DeletarUsuario from './components/usuarios/cardusuarios/deletarusuario/DeletarUsuario'
import ImcUsuario from './components/usuarios/imcusuario/ImcUsuario'
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

        <Route path='/cadastrarcategoria' element={<FormCategoria/>}/>
        <Route path='/editarcategoria/:id' element={<FormCategoria/>}/>
        <Route path='/deletarcategoria/:id' element={<DeletarCategoria/>}/>

        <Route path='/cadastro' element={<FormUsuario/>}/>
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/dadosusuario/:id" element={<DadosUsuario />} />
        <Route path="/editarcadastro/:id" element={<FormUsuario />} />
        <Route path="/deletarusuario/:id" element={<DeletarUsuario />} />
        <Route path="/imc/:id" element={<ImcUsuario />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );

}
export default App;