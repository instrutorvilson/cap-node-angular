import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erros',
  templateUrl: './erros.component.html',
  styleUrls: ['./erros.component.css']
})
export class ErrosComponent implements OnInit {
  msg: string = "Para realizar esta operação é necessário ser um adminstrador";
 
  constructor() { }

  ngOnInit(): void {
  }
}
