// import { useNavigate, useParams } from "react-router-dom";
// import Categoria from '../../../models/Categoria';
// import { ChangeEvent, useEffect, useState } from "react";
// import Treino from '../../../models/Treino';
// import { atualizar, buscar, cadastrar } from "../../../service/Service";
// import { ToastAlerta } from "../../../utils/ToastAlerta";
// import { RotatingLines } from "react-loader-spinner";

// function FormTreinos() {

//     const navigate = useNavigate();

//     const [categorias, setCategorias] = useState<Categoria[]>([])
//     const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', })

//     const [treino, setTreino] = useState<Treino>({} as Treino)

//     const { id } = useParams<{ id: string }>()

//     async function buscarTreinoPorId(id: string) {
//         try {
//             await buscar(`/treinos/${id}`, setTreino)            
//             } catch (error: any) {
//             ToastAlerta(error.toString().includes('403'),'erro')
//             }                    
//     }

//     async function buscarCategoriaPorId(id: string) {
//         try {
//             await buscar(`/categorias/${id}`, setCategoria)
//         } catch (error: any) {
//             ToastAlerta(error.toString().includes('403'),'erro')
//             }                    
//     }

//     async function buscarCategorias() {
//         try {
//             await buscar('/categorias', setCategoria)
//         } catch (error: any) {
//             ToastAlerta(error.toString().includes('403'),'erro')
//             }                    
//     }

//     useEffect(() => {
//         buscarCategorias()

//         if (id !== undefined) {
//             buscarCategoriaPorId(id)
//         }
//     }, [id])

//     useEffect(() => {
//         setTreino({
//             ...treino,
//             categoria: categoria,
//         })
//     }, [categoria])



//     function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
//         setTreino({
//             ...treino,
//             [e.target.name]: e.target.value,
//             categoria: categoria,
//             usuario: usuario,
//         });
//     }

//     function retornar() {
//         navigate('/treinos');
//     }

//     async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
//         e.preventDefault()  

//         if (id !== undefined) {
//             try {
//                 await atualizar(`/treinos`, treino, setTreino)                 
//                 ToastAlerta('Treino foi atualizado com sucesso!', 'info')
//             } catch (error: any) {
//                 ToastAlerta('Erro ao atualizar o treino.', 'erro')
//             }
            
//         } else {
//             try {
//                 await cadastrar(`/treinos`, treino, setTreino)               
//                 ToastAlerta('Treino foi cadastrado com sucesso!', 'info')
//             } catch (error: any) {
//                 ToastAlerta('Erro ao cadastrar o treino.' , 'erro')
//                 }
//             }
        
//         retornar()         

//     const carregandoTreino = categoria.descricao === '';           
          
//     return (
//         <div className="container flex flex-col mx-auto items-center">
//             <h1 className="text-4xl text-center my-8">Cadastrar Treino</h1>

//             <form className="flex flex-col w-1/2 gap-4">
//                 <div className="flex flex-col gap-2">
//                     <label htmlFor="titulo">Nome do Treino</label>
//                     <input
//                         type="text"
//                         placeholder="Nome Treino"
//                         name="text"
//                         required
//                         className="border-2 border-slate-700 rounded p-2"
//                         value={treino.nome}
//                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                     />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <label htmlFor="titulo">Descrição</label>
//                     <input
//                         type="text"
//                         placeholder="Descrição do treino"
//                         name="texto"
//                         required
//                         className="border-2 border-slate-700 rounded p-2"
//                         value={treino.descricao}
//                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                     />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <label htmlFor="titulo">Duração</label>
//                     <input
//                         type="text"
//                         placeholder="Em minutos"
//                         name="texto"
//                         required
//                         className="border-2 border-slate-700 rounded p-2"
//                         value={treino.duracao}
//                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                     />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <label htmlFor="titulo">Intensidade</label>
//                     <input
//                         type="text"
//                         placeholder="Alto/Media/Baixo"
//                         name="texto"
//                         required
//                         className="border-2 border-slate-700 rounded p-2"
//                         value={treino.intensidade}
//                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                     />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <p>Categoria do Treino</p>
//                     <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' 
//                     onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
//                     >
//                         <option value="" selected disabled>Selecione uma Categoria</option>

//                         {categorias.map(categoria) => (
//                             <>
//                                 <option value={categoria.id}> {categoria.descricao}</option>
//                             </>

//                         )}
                      
//                     </select>
//                 </div>
//                 <button 
//                     type='submit' 
//                     className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
//                                text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
//                                disabled={carregandoTreino}
//                 >
                    
//                             <RotatingLines
//                                 strokeColor="white"
//                                 strokeWidth="5"
//                                 animationDuration="0.75"
//                                 width="24"
//                                 visible={true}
//                             /> :
//                         <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                                  
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default FormTreinos;

import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Treino from "../../../models/Treino";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function FormTreinos() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '' });
    const [treino, setTreino] = useState<Treino>({} as Treino);
    const [carregandoTreino, setCarregandoTreino] = useState(false);

    async function buscarTreinoPorId(id: string) {
        try {
            await buscar(`/treinos/${id}`, setTreino);
        } catch (error: any) {
            ToastAlerta(error.toString().includes('403'), 'erro');
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            ToastAlerta(error.toString().includes('403'), 'erro');
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            ToastAlerta(error.toString().includes('403'), 'erro');
        }
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarTreinoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setTreino((prevTreino) => ({
            ...prevTreino,
            categoria: categoria
        }));
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTreino({
            ...treino,
            [e.target.name]: e.target.value,
            categoria: categoria
        });
    }

    async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCarregandoTreino(true);

        if (id !== undefined) {
            try {
                await atualizar(`/treinos`, treino, setTreino);
                ToastAlerta('Treino atualizado com sucesso!', 'info');
            } catch {
                ToastAlerta('Erro ao atualizar o treino.', 'erro');
            }
        } else {
            try {
                await cadastrar(`/treinos`, treino, setTreino);
                ToastAlerta('Treino cadastrado com sucesso!', 'info');
            } catch {
                ToastAlerta('Erro ao cadastrar o treino.', 'erro');
            }
        }

        setCarregandoTreino(false);
        navigate('/treinos');
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id ? 'Editar' : 'Cadastrar'} Treino</h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
                <div className="flex flex-col gap-2">
                    <label>Nome do Treino</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do treino"
                        value={treino.nome || ''}
                        onChange={atualizarEstado}
                        className="border-2 border-slate-700 rounded p-2"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Descrição do treino"
                        value={treino.descricao || ''}
                        onChange={atualizarEstado}
                        className="border-2 border-slate-700 rounded p-2"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Duração</label>
                    <input
                        type="number"
                        name="duracao"
                        placeholder="Duração em minutos"
                        value={treino.duracao || ''}
                        onChange={atualizarEstado}
                        className="border-2 border-slate-700 rounded p-2"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Intensidade</label>
                    <input
                        type="text"
                        name="intensidade"
                        placeholder="Alta/Média/Baixa"
                        value={treino.intensidade || ''}
                        onChange={atualizarEstado}
                        className="border-2 border-slate-700 rounded p-2"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria do Treino</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.descricao}</option>
                            </>
                        ))}

                    </select>
                   
                   
                </div>

                <button
                    type="submit"
                    className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
                    disabled={carregandoTreino}
                >
                    {carregandoTreino ? (
                        <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                    ) : (
                        <span>{id ? 'Atualizar' : 'Cadastrar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormTreinos;
