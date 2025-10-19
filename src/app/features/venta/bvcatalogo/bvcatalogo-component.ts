import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bvcatalogo-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './bvcatalogo-component.html',
  styleUrl: './bvcatalogo-component.scss'
})
export class BvcatalogoComponent {

  constructor(private router: Router) {}

  irATienda() {
    fetch('http://localhost:8080/venta-service/ventas/catalogo')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('catalogo', JSON.stringify(data));
        this.router.navigate(['/catalogo']);
      })
      .catch(error => console.error('Error al obtener el catálogo:', error));
  }


}
