import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  msg: string = ""
  produtos: any;

  constructor(private serviceProduto: ProdutoService) {
    this.serviceProduto.getAll().subscribe(x => this.produtos = x)
   }

  gravar(dados: any){
     this.serviceProduto.gravar(dados).subscribe(x => this.msg = "Produto criado com sucesso")
  }
    
  limparMsg(){
    this.msg = "";
  }

  ngOnInit(): void {
  
  }

  excluir(id:any){
     this.serviceProduto.excluir(id).subscribe(x => {window.location.reload()})
  }

}
