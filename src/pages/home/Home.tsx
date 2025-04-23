
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
                                <button className="bg-[#264653] text-[#e9c46a] border border-[#e9c46a] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                            Novo Treino
                                </button>
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
        </>
    )
}

export default Home