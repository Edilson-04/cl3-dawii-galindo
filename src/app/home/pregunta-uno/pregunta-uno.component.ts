/*
import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
*/
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';




@Component({
  selector: 'app-pregunta-uno',
  templateUrl: './pregunta-uno.component.html',
  styleUrl: './pregunta-uno.component.css'
})
export class PreguntaUnoComponent {

  horas: number = 0;
  minutos: number = 0;
  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.total = 0;
  }

  calcularTotal() {
    this.total = this.horas * 1500;
    if (this.minutos > 0) {
      this.total += (this.minutos / 60) * 1500;
    }
  }

}
