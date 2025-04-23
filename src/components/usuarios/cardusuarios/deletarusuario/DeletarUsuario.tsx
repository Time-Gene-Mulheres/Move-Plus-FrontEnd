import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import Usuario from '../../../../models/Usuario';
import { buscar, deletar } from "../../../../service/Service";

function DeletarUsuario() {

    const navigate = useNavigate()

    const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario)
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

    async function deletarUsuario() {
        setIsLoading(true)

        try {
            await deletar(`/usuarios/${id}`)

            alert('Usuário apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('404')) {
            }else {
                alert('Erro ao deletar a usuário.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/usuarios")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar usuario</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o usuário a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-40 bg-fuchsia-800 text-white font-bold text-2xl'>
                    Usuario
                </header>
                <p className='p-8 text-3xl bg-fuchsia-200 h-full'>{usuario.nome}</p>
                <div className="flex">
                    <button 
                        className='text-white  bg-purple-950  hover:bg-gray-800 w-full flex items-center justify-center'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='text-white bg-red-900 hover:bg-red-800 w-full flex items-center justify-center'
                                onClick={deletarUsuario}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarUsuario