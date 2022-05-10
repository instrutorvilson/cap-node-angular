import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: []
})
export class ConsultaComponent {

  listacliente: any = []
  constructor(private clienteService: ClienteService) {
    this.getTodos();
   }

  getTodos(){
    this.clienteService.getAll().subscribe(x => { 
      this.listacliente = x
      console.log(this.listacliente)
    })
  }

}
