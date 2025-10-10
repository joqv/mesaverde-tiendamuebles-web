import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private carrito: any[] = [];

  agregarProducto(producto: { id: number; nombre: string; cantidad: number; precio_unitario: number }) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  limpiarCarrito() {
    this.carrito = [];
  }

  constructor(private http: HttpClient) {}

  enviarCarritoAlBackend() {
    const payload = {
      productos: this.carrito,
      fecha: new Date(),
      total: this.carrito.reduce((acc, p) => acc + p.cantidad * p.precio_unitario, 0)
    };

    return this.http.post('http://localhost:61854/ventas/vender', payload);
  }


}
