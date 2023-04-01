import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

const AUTH_DATA = "auth_data";

@Injectable({
    providedIn: 'root'
})
export class AuthStore {

    //TEMOS AQUI UMA STORE DE AUTENTICAÇÃO
    //PQ ELA ARMAZENA O ESTADO DO USUARIO LOGADO


    //AQUI EXPOMOS PRA TODA A APLICAÇÃO O NOSSO OBSERVAVEL
    private subject = new BehaviorSubject<User>(null);
    //QUALQUER PARTE DA APLICAÇÃO PODE SE INSCREVER NESSE OBSERVAVEL

    user$ : Observable<User> = this.subject.asObservable();

    //TEMOS AQUI NOSSOS DOIS ESTADOS
    isLoggedIn$ : Observable<boolean>;
    isLoggedOut$ : Observable<boolean>;

    constructor(private http: HttpClient) {
        //PODEMOS VER QUE ELES SÃO ORIUNDOS DO NOSSO OBSERVABLE
        //DO USUARIO
        this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
        //SE TIVER UM PERFIL DE USUARIO PRA EMITIR
        //ELE VAI GUARDAR O ESTADO DE LOGIN E LOGOUT
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

        
        const user = localStorage.getItem(AUTH_DATA);

        if (user) {
            this.subject.next(JSON.parse(user));
        }

    }

    login(email:string, password:string): Observable<User> {
        return this.http.post<User>("/api/login", {email, password})
            .pipe(
                tap(user => {
                    this.subject.next(user);
                    localStorage.setItem(AUTH_DATA, JSON.stringify(user));
                }),
                shareReplay()
            );
    }

    logout() {
        this.subject.next(null);
        localStorage.removeItem(AUTH_DATA);
    }


}
