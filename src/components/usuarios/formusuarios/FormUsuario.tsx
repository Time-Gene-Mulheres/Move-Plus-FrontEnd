import { ChangeEvent, useEffect, useState } from "react";
//import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";


function FormUsuario() {

    const navigate = useNavigate();
    
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const {id} = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario,)
        } catch (error: any) {
            if (error.toString().includes('404')) {
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/usuarios")
    }

    async function gerarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            //usuario.id = Number(id);
            try {
                await atualizar(`/usuarios`, usuario, setUsuario)
                alert('O Usuario foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('404')) {
                } else {
                    alert('Erro ao atualizar o usuário.')
                }

            }
    } else 
        {
            try {
                await cadastrar(`/usuarios`, usuario, setUsuario)
                alert('O Usuário foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                   // handleLogout();
                } else {
                    alert('Erro ao cadastrar o usuário.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex  text-fuchsia-950 flex-col items-center justify-center mx-auto">
            
            <h1 className="text-4xl font-bold text-center my-8">
            {id === undefined ? 'Cadastrar' : 'Atualizar'}
            </h1>

            <form className="w-1/2 flex flex-col gap-3" onSubmit={gerarNovoUsuario}>
            <div className="flex flex-col font-bold gap-1">
                    <label htmlFor="nome">Nome: </label>
                    <input
                        type="text"
                        placeholder="Informe o nome do Usuário "
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col font-bold gap-1">
                    <label htmlFor="usuario">Usuario: </label>
                    <input
                        type="text"
                        placeholder="Informe o login do Usuário "
                        name='usuario'
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                                
                <div className="flex flex-col font-bold gap-1">
                    <label htmlFor="senha">Senha: </label>
                    <input
                        type="text"
                        placeholder="Informe a senha"
                        name='senha'
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col font-bold gap-1">
                    <label htmlFor="foto">Foto: </label>
                    <input
                        type="text"
                        placeholder="Informe a foto"
                        name='foto'
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col font-bold gap-1">
                    <label htmlFor="altura">Altura: </label>
                    <input
                        type="text"
                        placeholder="Informe a altura"
                        name='altura'
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.altura}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col font-bold gap-1">
                    <label htmlFor="peso">Peso: </label>
                    <input
                        type="text"
                        placeholder="Informe o peso"
                        name='peso'
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.peso}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>


                <button
                    className="rounded text-slate-100 bg-fuchsia-800
                        hover:bg-fuchsia-900 w-1/2 py-2 mx-auto flex justify-center"
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

export default FormUsuario;