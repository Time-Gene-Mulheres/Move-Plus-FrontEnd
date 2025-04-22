import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            bg-264653 text-black'>
            
                <div className="container flex justify-between text-lg">
                    Move Plus

                    <div className='flex gap-4'>
                        Usuário
                        Categoria
                        Cadastrar Categoria
                       <Link to='/treinos' className="hover:underline">Treino</Link> 
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar