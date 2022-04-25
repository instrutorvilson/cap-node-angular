import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Meu primeiro componente';
  nome: string = "vilson";

  cliente = {
    id: 10,
    nome:"Jose da Silva"
  }

  trocar(){
    this.nome = "Ana";
  }
}
