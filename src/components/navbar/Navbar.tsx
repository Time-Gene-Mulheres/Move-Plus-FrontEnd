import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-between items-center px-8 py-4
            bg-[#264653] text-[#e9c46a]'>
            
                <Link to='/home' className="text-2xl font-bold">
                Move Plus
                </Link>
                    
                    <div className='flex gap-4 text-lg'>
                        <Link to='/usuario'>Usuário</Link>
                        <Link to='/categoria'>Categoria</Link>
                        <Link to='/cadastrar-categoria'>Cadastrar Categoria</Link>
                        <Link to='/treino'>Treino</Link>
                        <Link to='/login'>Sair</Link>
                    </div>
            </div>
            
        </>
    )
}

export default Navbar