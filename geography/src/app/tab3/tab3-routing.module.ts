import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { MapaPage } from '../mapa/mapa.page'; 

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'mapa', // Ruta para la página del mapa dentro de tab1
    component: MapaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
