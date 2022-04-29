import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent implements OnInit {
   produto = {
     id:0,
     descricao: "",
     preco:0
   }

  constructor() { }

  ngOnInit(): void {
  }

}
