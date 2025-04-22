
export default interface Usuario{
    id?: number| null;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    altura: number;
    peso: number;
    //categoria?:Categoria[] | null;
}