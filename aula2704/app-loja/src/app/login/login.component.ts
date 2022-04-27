import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService) { }
  
  usuarios:any

  usuarioConectado = {
    id:0,
    nome: "",
    email: "",
    senha: "",
    perfil: ""
  }

  fazerLogin(dados: any){
    this.serviceUsuario.getAll().subscribe(x => {
      this.usuarios = x
      this.verificarLogin(dados.email, dados.senha, this.usuarios)
    })      
  }

  verificarLogin(email: string, senha: string, dados:any){
     for(let i = 0; i < dados.length; i++){
       if(email == dados[i].email && senha == dados[i].senha){
          this.usuarioConectado.id = dados[i].id
          this.usuarioConectado.nome = dados[i].nome
          this.usuarioConectado.email = dados[i].email
          this.usuarioConectado.senha = dados[i].senha
          this.usuarioConectado.perfil = dados[i].perfil
          this.gravarDadosLocalStorage()
       }
     }
  }
  //simular authguard
  gravarDadosLocalStorage(){
    localStorage.setItem("userConectado", JSON.stringify(this.usuarioConectado))
  }

  ngOnInit(): void {
  }

}
