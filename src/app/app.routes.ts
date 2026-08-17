import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta/atleta-component/atleta-component';
import { AtletaListComponent } from './component/atleta/atleta-list-component/atleta-list-component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "cadastroAtleta",
        component: AtletaComponent,
    },
    {
        path: "cadastroAtleta/id",
        component: AtletaComponent,
    },
    {
        path: "listaAtleta",
        component: AtletaListComponent,
    }
];