import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";

import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AuthStore } from "./auth.store";

//O CAN LOAD NOS PERMITE QUE OS MODULOS LAZY LAODING, SO VÃO SER BAIXADOS
//SE O USUARIO ESTIVER AUTHENTICADO DE ACORDO COM NO SERVIÇO DE AUTENTICAÇÃO
//ENTÃO SE ELE NÃO TIVER AUTHENTICADO NEM VAI BAIXAR, E PODE SER REDIRECIONADO PRA OUTRA PAGINA

@Injectable()
export class CanLoadAuthGuard implements CanLoad{

    constructor(private auth:AuthStore,private router:Router){

    }

    canLoad(route: Route, segments: UrlSegment[]):  Observable<boolean>  {
        //precisamos concluir o observable, depois de emitir o primeiro valor
        
        return this.auth.isLoggedIn$.pipe(first(),
        tap(loggedIn=>{
            if(!loggedIn){
                this.router.navigateByUrl('/login');
            }
        }));
    }
    

    
}