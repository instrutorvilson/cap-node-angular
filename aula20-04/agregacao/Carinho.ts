import Item from "./Item";

export default class Carinho{
    itens: Item[];
    data: string;
    cliente: string;
    finalizado: boolean;
    
    constructor(data:string, cliente: string){
        this.itens = [];
        this.data = data;
        this.cliente = cliente;
        this.finalizado = false;
    }
    add(it: Item): void{
        try{
            if(this.finalizado){
                throw "Carinho já finalizado"
            }
        }
        catch(err){
           console.log(err)
        }        
        this.itens.push(it);
    }

     remove(it: Item):void{
        let posicao = this.itens.indexOf(it);
        if(posicao > -1){
            this.itens.splice(posicao,1)
        }
     }

     getTotal(): number{
         let total: number = 0;
         for(let it of this.itens){
            total += (it.preco * it.qtde)
         }
         return total;
     }

     finalizar(){
         this.finalizado = true;
     }

}


