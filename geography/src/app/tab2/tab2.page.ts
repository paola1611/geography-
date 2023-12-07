import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  datosUsuario = {
    nombre: '',
    apellido: '',
    latitud: 0,
    longitud: 0
  };

  constructor(private router: Router) {}

  onSiguienteClick() {
    this.router.navigate(['/mapa'], { state: { datosUsuario: this.datosUsuario } });
  }
}
