import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  constructor() {  }
  title = "cliente";

  ngOnInit() {
    console.log("cliente.component cargado");
  }

}
