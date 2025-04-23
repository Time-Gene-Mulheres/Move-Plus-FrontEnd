import CardTreinos from "../cardtreinos/CardTreinos";
import Treino from '../../../models/Treino';
import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { DNA } from "react-loader-spinner";

function ListaTreinos() {

    const [treinos, setTreinos] = useState<Treino[]>([])

    async function buscarTreinos() {
        try {
            await buscar('/treinos', setTreinos)
        } catch (error : any) {
            ToastAlerta(error.toString().includes('403'),'erro')            
        }
    }

    useEffect(() => {
        buscarTreinos()
    }, [treinos.length])

    return (
        <>
        {treinos.length === 0 && (
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
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                                        {treinos.map((treino) => (
                                <CardTreinos key={treino.id} treino={treino} />
                                
                            ))}  
                                                             
                    </div>
                </div>
            </div>
        </>  
    
    );
}

export default ListaTreinos;