import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course.resolver';
import {LessonDetailComponent} from './lesson/lesson-detail.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {LessonsResolver} from './services/lessons.resolver';
import {LessonDetailResolver} from './services/lesson-detail.resolver';


const routes: Routes = [
  {
    //PRIMEIRA ROTA
    //SERIA A HOME ROUTING DO NOSSO MODULO QUE SERIA NESSE CASO O /courses
    //PÓR ISSO COLOCAMOS SEM NADA
    path:"",
    component:HomeComponent
  },
  {
    //VAMOS ADICIONAR UMA VARIAVEL PATH
    //ROUTER PATH VARIABLE
    path:":courseUrl",
    component:CourseComponent,
    //VAMOS COLOCAR ALGUMAS ROTAS FILHAS
    children:[
      {
        path:"",
        component:LessonsListComponent,
        resolve:{
          lessons:LessonsResolver
        }
      },
      {
        path:"lessons/:lessonSeqNo",
        component:LessonDetailComponent,
        resolve:{
          lesson:LessonDetailResolver
        }

      }
    ],
    resolve:{
        //CRIAMOS UM RESOLVER PRA CADA PROPRIEDADE DO NOSSO COMPONENT
        course:CourseResolver
    },
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
    //PROVEMOS O ROUTER RESOLVER COMO SERVIÇO DESSE MODULO
    //E O QUE FAZEMOS PARA DISTINGUIR ESSEE SERVIÇO DE OUTROS SERVIÇOS DA NOSSA APLICAÇÃO
    CourseResolver,
    LessonsResolver,
    LessonDetailResolver

  ]
})
export class CoursesRoutingModule {



}
