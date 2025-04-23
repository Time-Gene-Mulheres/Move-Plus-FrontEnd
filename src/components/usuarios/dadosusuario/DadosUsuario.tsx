import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";
import { buscar } from "../../../service/Service";
import UsuarioImc from "../../../models/UsuarioImc";
import CardCategorias from "../../categoria/cardcategorias/CardCategorias";

function DadosUsuario() {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [usuarioIMC, setUsuarioIMC] = useState<UsuarioImc | null>(null);
  const navigate = useNavigate();

  async function buscarUsuarioPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario);
      await buscar(`/usuarios/imc/${id}`, setUsuarioIMC);
    } catch (error: any) {
      alert("Deu erro aí");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarUsuarioPorId(id);
    }
  }, [id]);

  if (!usuario) {
    return <p>Carregando dados do usuário...</p>;
  }

  return (
    <div className="w-full flex justify-center">
        <div className="container flex flex-row gap-5">
            <div className="flex-1 p-6 border-4 bg-indigo-300  rounded-2xl shadow-md h-100">
                <h1 className="text-xl font-bold bg-indigo-600  mb-4">
                  dados do usuário
                </h1>

                <div className="space-y-2 mb-6 text-gray-800">
                  <p>
                    <strong>Nome:</strong> {usuario.nome}
                  </p>
                  <p>
                    <strong>Email:</strong> {usuario.usuario}
                  </p>
                  <p>
                    <strong>Senha:</strong> {usuario.senha}
                  </p>
                  <p>
                    <strong>Foto:</strong> {usuario.foto}
                  </p>
                  <p>
                    <strong>Altura:</strong> {usuario.altura} m
                  </p>
                  <p>
                    <strong>Peso:</strong> {usuario.peso} kg
                  </p>
                  <p>
                    <strong>IMC:</strong> {usuarioIMC?.imc.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-wrap justify-start gap-3">
                  <div className="flex gap-2">
                    <Link
                      to={`/imc/${usuario.id}`}
                      className=" bg-fuchsia-200 border-2 border-green-500    rounded-md px-4 py-2 w-24 text-center"
                    >
                      IMC
                    </Link>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/editarcadastro/${usuario.id}`}
                      className=" bg-fuchsia-200 border-2 border-red-700  text-black py-2 px-4 rounded"
                    >
                      Editar
                    </Link>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/deletarusuario/${usuario.id}`}
                      className=" bg-fuchsia-200 border-2 border-green-500    rounded-md px-4 py-2 w-24 text-center"
                    >
                      Deletar
                    </Link>
                  </div>
                </div>
            </div>

            <div className="flex-3 flex flex-col gap-5">
                {usuario.categoria?.map((categoria) => (
                    <CardCategorias key={categoria.id} categoria={categoria} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default DadosUsuario;
