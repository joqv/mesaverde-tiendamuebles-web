import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CarritoService } from '../../../services/carrito.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carrito-component',
  imports: [CommonModule,],
  standalone: true,
  templateUrl: './carrito-component.html',
  styleUrl: './carrito-component.scss'
})
export class CarritoComponent {
  productosEnCarrito: any[] = [];

  constructor(private carritoService: CarritoService,
              private router: Router
  ) {}

  ngOnInit() {
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
  }

  calcularTotal(): number {
    return this.productosEnCarrito.reduce((total, p) => total + p.cantidad * p.precio_unitario, 0);
  }

  comprar() {
    this.carritoService.enviarCarritoAlBackend().subscribe({
      next: (respuesta) => {

        alert(respuesta.mensaje);

        console.log('Transacción exitosa:', respuesta);
        //alert('¡Compra realizada con éxito!');
        this.carritoService.limpiarCarrito();
        this.productosEnCarrito = [];
        this.router.navigate(['/confirmacion']);
      },
      error: (error) => {
        console.error('Error al procesar la compra:', error);
        //alert('Hubo un problema al realizar la compra.');
        const mensajeError = error.error && error.error.mensaje ? error.error.mensaje : 'Error desconocido.';

        alert(mensajeError);
      }
    });
  }

  volverAlCatalogo() {
    this.carritoService.limpiarCarrito();
    this.productosEnCarrito = [];
    this.router.navigate(['/catalogo']);
  }

}
