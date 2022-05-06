import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  logar(email: string, senha: string){
    return this.http.post('http://localhost:8081/usuario/login',{
      email: email,
      senha: senha
    })
  }
}
