import { Link } from 'react-router-dom'
import Treino from '../../../models/Treino'


interface CardTreinosProps {
    treino: Treino
}

function CardTreinos({ treino }: CardTreinosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={treino.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={treino.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {treino.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{treino.categoria}</h4>
                    <p>Nome:{treino.nome}</p>
                    <p>Descrição: {treino.descricao}</p>
                    <p>Duração: {treino.duracao}</p>
                    <p>Intensidade: {treino.intensidade}</p>
                </div>
            </div>
            <div className="flex">
                <Link to='' 
                    className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to='' 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardTreinos

