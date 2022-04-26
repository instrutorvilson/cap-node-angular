import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-contato',
  templateUrl: './consulta-contato.component.html',
  styleUrls: ['./consulta-contato.component.css']
})
export class ConsultaContatoComponent implements OnInit {

  contatos = [{
    id:1,
    nome: "ana",
    email: "ana@gmail.com",
    fone: "2345-8970"
  },
  {
    id:2,
    nome: "pedro",
    email: "pedro@gmail.com",
    fone: "2345-8970"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
