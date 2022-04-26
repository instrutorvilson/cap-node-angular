import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {
   msg: string = "";
   
   saveContato(data: any) {
       this.serviceContato.save(data).subscribe( x => this.msg = "Contato salvo com sucesso"  )
  }

  constructor(private serviceContato: ServiceContatoService) { }

  ngOnInit(): void {
  }

}
