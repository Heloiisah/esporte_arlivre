import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta/atleta-component/atleta-component';
import { AtletaListComponent } from './component/atleta/atleta-list-component/atleta-list-component';

import { CorridaComponent } from './pages/corrida/corrida.component';

import { CorridasDisponiveisComponent } from './pages/corridas-disponiveis/corridas-disponiveis.component';

import { InscricaoComponent } from './pages/inscricao/inscricao.component';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'cadastroatleta',
    component: AtletaComponent
  },


  {
    path: 'cadastroatleta/:id',
    component: AtletaComponent
  },


  {
    path: 'listaAtleta',
    component: AtletaListComponent
  },


  {
    path: 'corrida',
    component: CorridaComponent
  },


  {
    path: 'cadastrocorrida',
    component: CorridaComponent
  },


  {
    path: 'corridas-disponiveis',
    component: CorridasDisponiveisComponent
  },


  {
    path: 'inscricao',
    component: InscricaoComponent
  }

];