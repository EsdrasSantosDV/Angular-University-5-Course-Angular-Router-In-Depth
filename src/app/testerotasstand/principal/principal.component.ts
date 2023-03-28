
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router';



@Component({
  selector: 'principal',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  constructor() { }

 

}
