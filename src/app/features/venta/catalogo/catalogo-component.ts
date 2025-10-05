import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-catalogo-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './catalogo-component.html',
  styleUrls: ['./catalogo-component.scss']
})



export class CatalogoComponent {
  productos = Array.from({ length: 56 }, (_, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    imagen: `${i + 1}.jpg`
  }));


}
