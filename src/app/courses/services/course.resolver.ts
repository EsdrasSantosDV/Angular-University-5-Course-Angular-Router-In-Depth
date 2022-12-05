import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';
import {first} from 'rxjs/operators';


//ELE E UM SERVIÇO DE ROTAS ESPECIAIS
//QUE FAZ O FETCHING DOS DADOS QUE O COMPONENTE USA PELA NAVEGAÇÃO
//s. Uma classe de provedor de dados pode ser usada com o roteador para resolver dados durante a navegação
@Injectable()
//TIPO DO EVENT COMPONENT
export class CourseResolver implements Resolve<Course>{

  constructor(private courses:CoursesService) {

  }


  //SO TEM UM METODO
  //O IDEAL E USAR OBSERVABLE
  //SE O OBSERVABLE NÃO FOR COMPLETADO, A TRANSIÇÃO DA ROTA NÃO PODE SER COMPLETADA
  //E NÃO PODE VER O TARGET SCREEN
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Course>  {
    //VAI PEGAR O PARAMETRO DA ROTA
    const courseUrl= route.paramMap.get("courseUrl");

    //fetching DO BACK END
    return this.courses.loadCourseByUrl(courseUrl);

  }
}
