import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className='w-full flex justify-between items-center px-8 py-4
            bg-[#264653] text-[#e9c46a]'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">
                        Move Plus
                    </Link>

                    <div className='flex gap-4 text-lg'>
                        <Link to='/usuarios'>Usuário</Link>
                        <Link to='/cadastrartreinos'>Cadastrar Treino</Link>
                        <Link to='/cadastrarcategoria'>Cadastrar Categoria</Link>
                        <Link to='/login'>Sair</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar