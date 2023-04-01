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

//SO QUE ESSA IMPLEMENTAÇÃO NÃO PERMITE O CAN ACTIVATE PRAS ROTAS FILHAS
//SE UM PASSAR DE UM ESTAGIO DA ROTA PAI QUE TA COM CANACTIVATE
//EU AINDA POSSO PASSAR PRAS ROTAS FILHAS AINDA
//ENTÃO AS ROTAS FILHAS NÃO ESTAO PROTEGIDAS

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
    return this.checkIfAuthenticated();
  }



  //ISSO AQUI VAI PERMITIR O GUARD PRAS ROTAS FILHAS, MAS LEMBRA DE COLOCAR 
  //LA NO ROUTING
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.checkIfAuthenticated();
  }

  checkIfAuthenticated() {
    return this.authStore.isLoggedIn$.pipe(
      //SE NÃO TIVER LOGADO VAI PRA PAGINA DE LOGIN
      map((loggedIn) => (loggedIn ? true : this.router.parseUrl("/login")))
    );
  }
}
