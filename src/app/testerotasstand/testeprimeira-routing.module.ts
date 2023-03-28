import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../courses/home/home.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { PrimeiraComponent } from './primeira/primeira.component';
import {PrincipalComponent} from './principal/principal.component'
import { SegundaComponent } from './segunda/segunda.component';

const routes: Routes = [


  {
    //AQUI JA TA SENDO CARREGADO LAZY LOADING PELA ROTA PRINCIPAL
    //POR ISSO NÃO PRECISO COLCOAR /principal
    path:"",
    loadComponent:()=> import('./principal/principal.component').then((m)=>m.PrincipalComponent)
  },
  {
   
    path:"primeira",
    //omponent:PrimeiraComponent,
    loadComponent:()=> import('./primeira/primeira.component').then((m)=>m.PrimeiraComponent),
    children:[
      {
        path:"segunda",
        //component:SegundaComponent
        loadComponent:()=> import('./segunda/segunda.component').then((m)=>m.SegundaComponent),
      },
     
    ]

  }

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteprimeiraRoutingModule { }
