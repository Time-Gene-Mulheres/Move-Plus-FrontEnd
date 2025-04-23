import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-[#264653] flex justify-center">
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
                                            border-[#e9c46a] border-solid border-2 py-2 px-4'
                                >
                            <Link to='/novoTreino'>Novo Treino</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img
                            src="https://cdn.discordapp.com/attachments/1349737011212320849/1364356931883503716/mulherresmamlhando.png?ex=68095fe9&is=68080e69&hm=2e1cef7e2d4e2c18b8c0343b9235fe3cf7aae38107f7e2618d3e125ef3da5a5f&"
                            alt="Imagem Página Home"
                            className='w-full md:w-2/3 mr-0 md:mr-10'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home