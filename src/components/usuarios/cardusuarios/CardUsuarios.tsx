
import { Link } from 'react-router-dom'
import Usuario from '../../../models/Usuario'

interface CardUsuariosProps{
    usuario: Usuario
}

function CardUsuarios({usuario}: CardUsuariosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img src='https://i.imgur.com/pK6vSCy.png'
                        className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {usuario.nome}
                    </h3>
                </div>
                {/* <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Titulo</h4>
                    <p>texto</p>
                    <p>Tema: </p>
                    <p>Data: </p>
                </div> */}
            </div>
            <div className="flex">
                <Link to={`/dadosusuario/${usuario.id}`} 
                className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Mais Informações Usuário</button>
                </Link>
                
            </div>
            
            
        </div>
    )
}

export default CardUsuarios