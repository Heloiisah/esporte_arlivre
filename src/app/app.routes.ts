import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta/atleta-component/atleta-component';
import { AtletaListComponent } from './component/atleta/atleta-list-component/atleta-list-component';
import { CorridaComponent } from './component/corrida/corrida-component/corrida-component';
import { CorridaListaComponent } from './component/corrida/corrida-lista-component/corrida-lista-component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  // ATLETA
  {
    path: 'cadastroAtleta',
    component: AtletaComponent
  },

  {
    path: 'cadastroAtleta/:id',
    component: AtletaComponent
  },

  {
    path: 'listaAtleta',
    component: AtletaListComponent
  },

  // CORRIDA
  {
    path: 'cadastrocorrida',
    component: CorridaComponent
  },

  {
    path: 'cadastrocorrida/:id',
    component: CorridaComponent
  },

  {
    path: 'listacorrida',
    component: CorridaListaComponent
  }

];
