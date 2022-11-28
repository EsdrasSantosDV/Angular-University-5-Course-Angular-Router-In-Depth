import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
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
  }




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
