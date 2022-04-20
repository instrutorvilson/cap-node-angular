"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, contato) {
        this.id = id;
        this.nome = nome;
        this.contato = contato;
    }
    salvar() {
        console.log(`Salvando a pessoa ${this.nome}`);
        return true;
    }
    display() {
        return `Id: ${this.id} Nome: ${this.nome} Contato: ${this.contato}`;
    }
}
exports.default = Pessoa;
