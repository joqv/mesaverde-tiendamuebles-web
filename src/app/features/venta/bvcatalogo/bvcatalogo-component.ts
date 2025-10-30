import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-bvcatalogo-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bvcatalogo-component.html',
  styleUrl: './bvcatalogo-component.scss'
})
export class BvcatalogoComponent {

  constructor(
    private router: Router,
    private http: HttpClient 
  ) {}

  irATienda() {
    this.http.get('http://localhost:8080/venta-service/ventas/catalogo')
      .subscribe({
        next: (data) => {
          localStorage.setItem('catalogo', JSON.stringify(data));
          this.router.navigate(['/catalogo']);
        },
        error: (error) => {
          console.error('Error al obtener el catálogo:', error);
        }
      });
  }
}
