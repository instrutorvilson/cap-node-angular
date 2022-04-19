class Itens{
    descricao: string;
    preco: number;
    qtde: number;

    constructor(descricao: string, preco: number, qtde: number){
       this.descricao = descricao;
       this.preco = preco;
       this.qtde = qtde;
    }

    totalItem():number{
        return this.qtde * this.preco;
    }

    valorDesconto(taxa:number): number{
        return this.totalItem() * (taxa/100);
    }

    display(taxa:number):void{
        console.log(`
             Descrição..: ${this.descricao}
             Preço......: ${this.preco}
             Qtde.......: ${this.qtde}
             Subtotal...: ${this.totalItem()}
             R$ desconto: ${this.valorDesconto(taxa)}
             R$ pago....: ${this.totalItem() - this.valorDesconto(taxa)}
        `)
    }
}

let item1: Itens = new Itens('Computador',2000,2);
item1.display(10)