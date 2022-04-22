interface IDao<T>{
    salvar(obj: T):void;
    alterar(obj: T): void;
    excluir(id: number): void;
    consultarTodos():T[];
    consultarPorId(id:number):T
} 

class Produto {
    id: number;
    descricao: string;
    preco: number;
    estoque: number;
    constructor(id:number, descricao: string, preco: number, estoque: number){
       this.id = id
       this.descricao = descricao
       this.preco = preco
       this.estoque = estoque
    }    
}

class ModelProduto implements IDao<Produto>{
    salvar(obj: Produto): void {
        throw new Error("Method not implemented.");
    }
    alterar(obj: Produto): void {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultarTodos(): Produto[] {
        fetch('http://localhost:3000/produtos')
        .then(x => x.text())
        .then(data => console.log(data))
        
        let x: Produto[] = []
        return x
    }
    consultarPorId(id: number): Produto {
        throw new Error("Method not implemented.");
    }
}


