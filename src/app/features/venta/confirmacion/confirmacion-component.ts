import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmacion-component',
  imports: [ CommonModule,],
  standalone: true,
  templateUrl: './confirmacion-component.html',
  styleUrl: './confirmacion-component.scss'
})
export class ConfirmacionComponent {

  constructor(private router: Router) {}

  volverAlCatalogo() {
    this.router.navigate(['/catalogo']);
  }

}
