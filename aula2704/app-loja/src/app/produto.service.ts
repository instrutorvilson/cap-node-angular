import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  gravar(dados: any){
    let url = 'http://localhost:3000/produtos'
    return this.http.post(url,dados)
  }

}
