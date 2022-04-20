"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaJuridica extends Pessoa_1.default {
    constructor(id, nome, contato, cnpj) {
        super(id, nome, contato);
        this.cnpj = cnpj;
    }
    display() {
        return `${super.display()} Cnpj: ${this.cnpj}`;
    }
}
let pj;
pj = new PessoaJuridica(3, 'mercado livre', 'mercado@livre.com', '123.0001/4');
console.log(pj.display());
