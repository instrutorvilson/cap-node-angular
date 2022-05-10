import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(){
    let url= 'https://ms-vm-cliente.herokuapp.com/clientes'
    return this.http.get(url)
  }
}
