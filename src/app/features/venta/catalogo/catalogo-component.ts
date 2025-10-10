import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CarritoService } from '../../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalogo-component',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './catalogo-component.html',
  styleUrls: ['./catalogo-component.scss']
})



export class CatalogoComponent {

  productos: any[] = [];

  ngOnInit() {
    const datos = localStorage.getItem('catalogo');
    if (datos) {
      this.productos = JSON.parse(datos);
    } else {
      console.warn('No se encontró el catálogo en localStorage');
    }
  }
  constructor(private carritoService: CarritoService,
              private router: Router
              ) {}

  agregarAlCarrito(producto: any) {
    const cantidad = producto.cantidad || 1;
    this.carritoService.agregarProducto({
      id: producto.id,
      nombre: producto.nombre,
      cantidad: cantidad,
      precio_unitario: producto.precio
    });

  }

  agregarSeleccionados(){
    const seleccionados = this.productos.filter(p => p.seleccionado && p.cantidad > 0);

    seleccionados.forEach(producto => {
      this.carritoService.agregarProducto({
        id: producto.id,
        nombre: producto.nombre,
        cantidad: producto.cantidad,
        precio_unitario: producto.precio
      });
    });
    this.router.navigate(['/carrito']);
  }



}
