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

class ModelProduto {
    salvar(obj: Produto): void {
        fetch('http://localhost:3000/produtos',{
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-type': 'Application/json'
            }
        })
    }
    alterar(obj: Produto): void {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback:(lista:Produto[]) => { }):void {
        fetch('http://localhost:3000/produtos')
        .then(x => x.json())
        .then(data => callback(data))                
    }
    
  /** 1)callback  2)async => promisse */  
  consultarPorId(id: number, callback:(s:Produto)=>{}) {
        fetch(`http://localhost:3000/produtos/${id}`)
        .then(x => x.json())
        .then(data => callback(data))        
    }
}


