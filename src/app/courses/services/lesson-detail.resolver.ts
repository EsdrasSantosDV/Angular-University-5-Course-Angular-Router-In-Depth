import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LessonDetail} from '../model/lesson-detail';
import {Injectable} from '@angular/core';
import {CoursesService} from './courses.service';
import {Observable} from 'rxjs';

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail>
{
  constructor(private  course:CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail>  {

    //TEMOS QUE PEGAR O COURSE URL, PRA ISSO PRECISAMOS UTILIZAR O PARENTE VARIABLE
    const courseUrl = route.parent.paramMap.get("courseUrl");
    const lessonSeqNo=route.paramMap.get("lessonSeqNo");

    return this.course.loadLessonDetail(courseUrl,lessonSeqNo);
  }


}
