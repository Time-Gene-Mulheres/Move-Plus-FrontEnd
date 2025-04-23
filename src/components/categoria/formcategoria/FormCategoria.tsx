import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Usuario from "../../../models/Usuario";

function FormCategoria() {

  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams<{ id: string }>();
  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      alert('Erro ao buscar pela categoria')
    }
  }
  async function buscarUsuarioPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario)
      setCategoria({
        ...categoria,
        usuario:usuario
      })
    } catch (error: any) {
      alert('Erro ao buscar pelo ID do usuário')
    }
  }
  async function buscarTodosUsuarios() {
      try {
        await buscar("/usuarios", setUsuarios)
      } catch (error: any) {
        alert("Erro ao buscar os usuários!")
      }
  }
  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
    }
    buscarTodosUsuarios()
  }, [id])
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }
  function retornar() {
    navigate("/usuarios/")
  }
  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)
        alert('A Categoria foi atualizada com sucesso!')
      } catch (error: any) {
        alert('Erro ao atualizar categoria')
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)
        alert('A Categoria foi cadastrada com sucesso!')
      } catch (error: any) {
        alert('Erro ao cadastrar a categoria!')
      }
    }
    setIsLoading(false)
    retornar()
  }
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>
      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
          <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Descrição da Categoria</label>
              <input
                  type="text"
                  placeholder="Escreva a Categoria aqui..."
                  name='descricao'
                  className="border-2 border-slate-700 rounded p-2"
                  value={categoria.descricao || ''}
                  onChange={atualizarEstado}
              />
          </div>
          <div className="flex flex-col gap-2">
              <label htmlFor="usuario">Usuário Responsável</label>
              <select
                  name="usuario"
                  id="usuario"
                  className='border p-2 border-slate-800 rounded'
                  value={categoria.usuario?.id || ''}
                  onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
              >
                  <option value="" disabled>Selecione um Usuário</option>
                  {usuarios.map((usuario) => (
                      <option key={usuario.id} value={usuario.id!}>
                        {usuario.nome}
                      </option>
                  ))}
              </select>
          </div>
          <button
              className="rounded text-slate-100 bg-indigo-400 
                      hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
              type="submit">
              {isLoading ?
                  <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                  /> :
                  <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
              }
          </button>
      </form>
    </div>
  );
}

export default FormCategoria;