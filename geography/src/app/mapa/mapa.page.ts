import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'leaflet';

declare var L: any;

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage implements AfterViewInit {
  @ViewChild('map', { static: false }) mapContainer!: ElementRef;

  datosUsuario: any;
  map: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.datosUsuario = navigation.extras.state["datosUsuario"];
    }
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    if (this.mapContainer && this.datosUsuario) {
      this.map = L.map(this.mapContainer.nativeElement).setView([this.datosUsuario.latitud, this.datosUsuario.longitud], 10);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([this.datosUsuario.latitud, this.datosUsuario.longitud]).addTo(this.map)
      .bindPopup(`Nombre: ${this.datosUsuario.nombre}<br>Apellido: ${this.datosUsuario.apellido}`)
      .openPopup();
  }
}