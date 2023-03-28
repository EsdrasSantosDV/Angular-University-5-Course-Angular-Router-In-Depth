import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'primeira',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './primeira.component.html',
  styleUrls: ['./primeira.component.scss']
})
export class PrimeiraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
