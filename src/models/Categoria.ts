import Treino from "./Treino"
import Usuario from "./Usuario"

export default interface Categoria {
    id?: number | null
    descricao: string
    usuario?: Usuario | null
    treino?: Treino[] | null
}