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
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(callback) {
        fetch('http://localhost:3000/produtos')
            .then(x => x.json())
            .then(data => callback(data));
    }
    /** 1)callback  2)async => promisse */
    consultarPorId(id, callback) {
        fetch(`http://localhost:3000/produtos/${id}`)
            .then(x => x.json())
            .then(data => callback(data));
    }
}
