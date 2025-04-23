import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategoria/ListaCategorias'
import Footer from './components/footer/Footer'
import FormUsuario from './components/usuarios/formusuarios/FormUsuario'
import ListaUsuarios from './components/usuarios/listausuarios/ListaUsuarios'
import DadosUsuario from './components/usuarios/dadosusuario/DadosUsuario'
import DeletarUsuario from './components/usuarios/cardusuarios/deletarusuario/DeletarUsuario'
import ImcUsuario from './components/usuarios/imcusuario/ImcUsuario'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categorias' element={<ListaCategorias/>}/>
        {/* rota Treino apenas para visualização*/}
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