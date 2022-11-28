import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    //PRIMEIRA ROTA
    //SERIA A HOME ROUTING DO NOSSO MODULO QUE SERIA NESSE CASO O /courses
    //PÓR ISSO COLOCAMOS SEM NADA
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [
    //CONFIGRUAÇÃO DAS NOSSAS FILHAS
    //FOR ROOT E PRA NOSSA ROUTE MODULE DA NOSSA APLICAÇÃO
    //E FOR CHILD E PRAS FILHAS DA NOSSA ROOUTE MODULE PRINCIPAL DA APP
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class CoursesRoutingModule {



}
