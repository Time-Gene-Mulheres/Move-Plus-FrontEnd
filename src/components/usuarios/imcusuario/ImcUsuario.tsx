import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../../../service/Service";
import Usuario from "../../../models/Usuario";
import UsuarioImc from "../../../models/UsuarioImc";

function ImcUsuario() {
const { id } = useParams();
console.log("ID do usuário:", id);
const [usuario, setUsuario] = useState<Usuario | null>(null);
const [usuarioImc, setUsuarioImc] = useState<UsuarioImc | null>(null);

// async function buscarPorId(id: string) {
//     try {
//         await buscar(`/usuarios/${id}`, setUsuario)
//     } catch (error: any) {
//         console.log("Aconteceu algo aqui....")
//     }
// }

// useEffect(() => {
//     if (id !== undefined) {
//         buscarPorId(id)
//     }
// }, [id])

useEffect(() => {
    if (id) {
        buscar(`/usuarios/${id}`, (data: Usuario) =>{
    // buscar(`/usuarios/${id}`, (data: Usuario) => {
    setUsuario(data);
    });

    buscar(`/usuarios/imc/${id}`, (data: UsuarioImc) => {
    setUsuarioImc(data);
    });
}
}, [id]);


useEffect(() => {
}, [usuario]);

useEffect(() => {
}, [usuarioImc]);


if (!usuario || !usuarioImc) {
return <p>Carregando dados do usuário...</p>;
}

return (
<div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto mt-8">
    <h1 className="text-xl font-bold mb-4">IMC do Usuário</h1>
    <p><strong>Nome:</strong> {usuarioImc.nome}</p>
    <p><strong>Altura:</strong> {usuarioImc.altura} m</p>
    <p><strong>Peso:</strong> {usuarioImc.peso} kg</p>
    <p><strong>IMC:</strong> {usuarioImc.imc.toFixed(2)}</p>
</div>
);
}

export default ImcUsuario;
