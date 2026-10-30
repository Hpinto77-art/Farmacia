import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Servicios } from './servicios/servicios';
import { Carrusel } from './carrusel/carrusel';

@Component({
  imports: [RouterOutlet, Servicios, Carrusel],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = 'farmacia';
}
