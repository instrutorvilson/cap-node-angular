interface IDao{
    salvar():boolean;
    alterar(objeto: string): boolean;
    consultar():string[];
    consultarPorId(id: number): string;
    excluir(id:number): void;
}

export {IDao}