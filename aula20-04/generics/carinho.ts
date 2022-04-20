import Item from "./Item";
import Produto from "./Produto";

let feijao: Produto;
feijao = new Produto('Feijão preto',5, 10);

let arroz = new Produto('Arroz',14.90, 25);

let it1: Item = new Item(feijao, feijao.valorUnitario, 2);
let it2 = new Item(arroz, arroz.valorUnitario, 3);

let carrinho:Item[] = [it1, it2]

carrinho.push(new Item(feijao, feijao.valorUnitario,3))

console.log(carrinho)