import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {
  contatos = [{
    id: 1,
    nome: "ana",
    email: "ana@gmail.com",
    fone: "2345-8970"
  },
  {
    id: 2,
    nome: "pedro",
    email: "pedro@gmail.com",
    fone: "2345-8970"
  },
  {
    id: 3,
    nome: "maria",
    email: "maria@gmail.com",
    fone: "2345-8970"
  },
  {
    id: 4,
    nome: "Antonio",
    email: "antonio@gmail.com",
    fone: "2345-8970"
  }
  ]

  saveContato(data: any) {
    data.id = this.contatos.length+1
    this.contatos.push(data)
  }

  nome: string = "chaves";
  constructor() { }

  ngOnInit(): void {
  }

}
