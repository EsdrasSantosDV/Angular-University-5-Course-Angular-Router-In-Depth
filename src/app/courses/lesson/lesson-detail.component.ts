import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson$:Observable<LessonDetail>;

  constructor(private route:ActivatedRoute,private router:Router) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    //O IDEAL E NOS USARMOS UM OBSERVABLE, QUE TEM COMO FONTE A ROTA
    //E FAZEMOS UM OBSERVADOR PRO DATA QUE FICA EMITINDO NOTIFICAÇOES NOVAS
    this.lesson$=this.route.data.pipe(map(data=> data["lesson"]))


    //TEMOS UM PROBLEMA COM O INSTANTENEO PRA FAZER A LOGICA
    //DE PASSAR PRA PROXIMA LIÇÃO
    //O SNAPSHOT DATA, PEGA O PRIMEIRO VALOR EMITIDO PELO RESOLVER
    //PRA GENTE REUTILIZAR O COMPONENTE VARIAS VEZES, COM O INSTANTENEO NÃO VAI FUNCIONAR
    //ELE  E COMO SE TIVESSE TIRANDO FOTO DO ESTADO DO DATA NO MOMENTO DA INCIIALIZAÇÃO DO COMPOENNTE    
    //this.lesson= this.route.snapshot.data["lesson"];
  }


  previous(lesson: LessonDetail) {
    this.router.navigate(['lessons',lesson.seqNo-1],{relativeTo:this.route.parent});
  }

  next(lesson: LessonDetail) {
    this.router.navigate(['lessons',lesson.seqNo+1],{relativeTo:this.route.parent});
  }
}
