import Categoria from "./Categoria"

export default interface Treino {
    id?: number | null
    nome: string
    descricao: string
    duracao: number
    intensidade: string
    categoria: Categoria[] | null
}