import ListaTreinos from "../../components/treinos/listatreinos/ListaTreinos"
import ModalTreinos from "../../components/treinos/modaltreinos/ModalTreinos"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Move Plus!
                        </h2>
                        <p className='text-xl'>
                        Treinos personalizados, resultados reais. Para todos os corpos, todas as metas.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                <ModalTreinos/>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaTreinos />
        </>
    )
}

export default Home