import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from '@angular/router';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  routing: boolean = false;

  @Input()
  detectRoutingOngoing=false;

  constructor(public loadingService: LoadingService,private router:Router) {

  }

  ngOnInit() {
    if(this.detectRoutingOngoing)
    {
      //DETECTAR SERIE DE EVENTOS DAS ROTAS
      this.router.events.subscribe(
        //EVENTO QEU RECEBEMOS
        //DETECTAR O START DA TRANSIÇÃO DE ROTA
        event=>{
          //SE ELE FOI
          if(event instanceof  NavigationStart || event instanceof RouteConfigLoadStart){
            this.loadingService.loadingOn();
          }
          else
          {
            //SE A NAVEGAÇÃO FOI UM SUCESSO SE FOI UM ERRO E SE ALGUEM CANCELOU
            if(event instanceof NavigationEnd
              || event instanceof NavigationError
              || event instanceof  NavigationCancel
              || event instanceof  RouteConfigLoadEnd)
            {
              this.loadingService.loadingOff();
            }
          }

        }

      );
    }


  }


}
