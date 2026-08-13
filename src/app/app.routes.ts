import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { CorridaComponent } from './pages/corrida/corrida.component';
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
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'corrida',
    component: CorridaComponent
  },

  {
    path: 'inscricao',
    component: InscricaoComponent
  }

];