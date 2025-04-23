import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { ToastAlerta } from "../../../utils/ToastAlerta"
import Treino from "../../../models/Treino"
import { buscar, deletar } from "../../../service/Service"


function DeletarTreino() {
    const navigate = useNavigate()

    const [treino, setTreino] = useState<Treino>({} as Treino)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/treinos/${id}`, setTreino)
        } catch (error: any) {
            ToastAlerta(error.toString().includes('403'), 'erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTreino() {
        try {
            await deletar(`/treinos/${id}`)
                ToastAlerta('Categoria apagada com sucesso' , 'info')
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }else {
                ToastAlerta('Erro ao deletar categoria.', 'erro')
            }
        }
       
        retornar()
    }

    function retornar() {
        navigate("/treinos")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Treino</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o treino a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-500 text-white font-bold text-2xl'>
                    Treino
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{treino.nome}</p>
                    <p>Descrição: {treino.descricao}</p>
                    <p>Duração: {treino.duracao}</p>
                    <p>Intensidade: {treino.intensidade}</p>   
                </div>             
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                       onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-emerald-400 flex items-center justify-center' onClick={deletarTreino}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarTreino