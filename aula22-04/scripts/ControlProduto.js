"use strict";
class Produto {
    constructor(id, descricao, preco, estoque) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }
}

class ModelProduto {
    salvar(obj) {
        throw new Error("Method not implemented.");
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos() {
        fetch('http://localhost:3000/produtos')
            .then(x => x.text())
            .then(data => console.log(data));
        let x = [];
        return x;
    }
    consultarPorId(id) {
        throw new Error("Method not implemented.");
    }
}