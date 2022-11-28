import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [


  //IMPORTANTE A ORDEM DAS RTOAS IMPORTA, NUNCA COLOCAR A ROTA DO PAGE NOT FOUND
  //QUE É  ** DE PRIMEIRA, SENÃO QUALQEUR ROTA VAI DAR NOT FOUND



 //A  ORDEM IMPORTA PRO PAGE NOT FOUND
  //PQ ELE GENERALIZA
  {
    // E O "" E PREFIXO DE QUALQUER OUTRO CAMINHO
    path:"",
    //POR ISSO PRECISAMOS DO PATH MATCH full
    pathMatch:"full",
    //REDIRECIONAMOS PRA /Courses
    redirectTo:"/courses"
  },
  {
    path:"courses",
    //CARREGAMENTO PREGUIÇOSO LAZY LOADING JEITO IDEAL
    //CARREGA SOBRE DEMANDA, AO INVES DE CARREGAR TUDO NA INIICIALIZAÇÃO DA PAGINA
    //VAI CARREGAR OS COMPONENTES SOBRE DEMANDA
    loadChildren:()=> import('./courses/courses.module').then(m=>m.CoursesModule)
  },
  //CONFIGURAÇÃO DAS ROTAS
  {
    //PROPOSITO E MAPEAR AS ROTAS AQUI
    //PRIMEIRO E O CAMINHO
    path:"login",
    //LOCANDO O CAMINHO AO COMPONENTE A SER DISPLAY
    component:LoginComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    //PAGINA NÃO ENCONTRADA
    //PATH PEGA TODAS QUE NÃO TA MAPEADA AQUI
    //NUNCA COLOCAR A ROTA DO PAGE NOT FOUND COMO PRIMEIRA
    path:"**",
    component:PageNotFoundComponent
  },



];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {


}
