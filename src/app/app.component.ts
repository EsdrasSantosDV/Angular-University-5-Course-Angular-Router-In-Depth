import {Component, OnInit} from '@angular/core';
import {AuthStore} from './services/auth.store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  //PODEMOS VER QUE E PUBLICO, PQ PRECISAMSO ACESSAR LA NO TEMPLATE
    constructor(public auth: AuthStore) {

    }

    ngOnInit() {


    }

  logout() {
        this.auth.logout();

  }

}
