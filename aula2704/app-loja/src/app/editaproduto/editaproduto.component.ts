import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-editaproduto',
  templateUrl: './editaproduto.component.html',
  styleUrls: ['./editaproduto.component.css']
})
export class EditaprodutoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private serviceProduto: ProdutoService) { }
  produto: any;
  
  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idproduto: number = Number(routeParams.get('idproduto'))
    this.serviceProduto.getOne(idproduto).subscribe(x => this.produto = x)
  }

}
