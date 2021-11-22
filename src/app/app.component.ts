import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudF';

  constructor(private router:Router){}

  listarPokemones(){
    this.router.navigate(['listar']);

  }

  agregarPokemon(){
    this.router.navigate(['agregar']);
  }
}
