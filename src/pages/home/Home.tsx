import ListaTreinos from "../../components/treinos/listatreinos/ListaTreinos"
import ModalTreinos from "../../components/treinos/modaltreinos/ModalTreinos"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-[#264653]  h-screen">
                <div className='container grid grid-cols-2 text-[#e9c46a]'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Move Plus!
                        </h2>
                        <p className='text-xl'>
                        Treinos personalizados, resultados reais.<br/>
                        Para todos os corpos, todas as metas.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-[#e9c46a]
                                            py-2 px-4'
                                >
                            <Link to='/usuarios'>Acessar Alunos</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img
                            src="https://i.imgur.com/2JF7D4E.png"
                            alt="Imagem Página Home"
                            className='w-3/3'
                        />
                    </div>
                </div>
            </div>
            <ListaTreinos />
        </>
    )
}

export default Home