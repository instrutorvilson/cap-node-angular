import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-loja';
  userLogado: any = {}
  pegarPerfilUsuarioConectado(){
    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null){
      user = JSON.parse(user)
      this.userLogado = user
    }
  }
  constructor(){
    this.pegarPerfilUsuarioConectado();
  }

}
