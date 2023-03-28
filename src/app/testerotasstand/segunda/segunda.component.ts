import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'segunda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.scss']
})
export class SegundaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
