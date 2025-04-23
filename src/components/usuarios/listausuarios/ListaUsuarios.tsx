
import { useEffect, useState } from "react";
import Usuario from "../../../models/Usuario";
import CardUsuarios from "../cardusuarios/CardUsuarios";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";

function ListaUsuarios() {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    async function buscarUsuarios() {
        try {
            await buscar('/usuarios', setUsuarios
            )
        } catch (error: any) {
            if (error.toString().includes('404')) {
            }
        }
    }

    useEffect(() => {
        buscarUsuarios()    
    }, [usuarios.length])
    
    return (
        <>
        {usuarios.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                <div className="flex">
                    <Link to={`/cadastro/`} 
                    className='w-full text-white bg-indigo-400 
                        hover:bg-indigo-800 flex items-center justify-center py-2'>
                        <button>Cadastrar</button>
                    </Link>
                </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {usuarios.map((usuario) => (
                            <CardUsuarios key={usuario.id} usuario={usuario} />
                        ))}                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaUsuarios;

