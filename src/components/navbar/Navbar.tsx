import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            bg-264653 text-black'>
            
                <div className="container flex justify-between text-lg">
                    Move Plus

                    <div className='flex gap-4'>
                    <Link to='/usuarios' className='hover:underline'>Usuarios</Link>

                    <Link to='/cadastrartreinos' className='hover:underline'>Cadastrar Treino</Link>

                    <Link to='/cadastrarcategoria' className="hover:underline">Cadastrar Categoria</Link> 
                        
                    <Link to='/' className="hover:underline">Sair</Link>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar