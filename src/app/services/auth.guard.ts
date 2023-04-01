import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthStore } from "./auth.store";

//UM CAN ACTIVATE E ACESSADO ANTES DA TRANSIÇAO
//SE O USUARIO NÃO TIVER ACESSO, A ROTA NEM E CHAMADA
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authStore: AuthStore, private router: Router) {}

  //COMO ESTAMOS CONSTURINDO TUDO DE FORMA REATIVA, SEMPRE COLOCA O OBSERVABLE
  //RETORNANDO BOOLEAN E UMA URL TREE
  //UM BOOLEAN SE FOR TRUE, SE O USUARIO ESTA LOGADO POR EXEMPLO
  //E UMA URL TREE PRA UMA ROTA CONTRARIA PRA QUANDO ELE NÃO ESTIVER LOGADO
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {

   return this.authStore.isLoggedIn$.pipe(
    //SE NÃO TIVER LOGADO VAI PRA PAGINA DE LOGIN
      map((loggedIn) => (loggedIn? true : this.router.parseUrl("/login")))
    );
  }
}
