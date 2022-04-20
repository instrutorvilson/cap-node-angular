import Item from "./Item";
import Produto from "./Produto";
import Carinho from "./Carinho";

let feijao: Produto;
feijao = new Produto('Feijão preto',5, 10);

let arroz = new Produto('Arroz',14.90, 25);

let it1: Item = new Item(feijao, feijao.valorUnitario, 2);
let it2 = new Item(arroz, arroz.valorUnitario, 3);

console.log(it1)
console.log(it2)

let c1: Carinho;
c1 = new Carinho('20/04/2022', 'jose')
c1.add(it1);
c1.add(it2);
console.log(c1)

c1.remove(it1);
console.log(c1)

console.log(c1.itens[0].produto.descricao)

