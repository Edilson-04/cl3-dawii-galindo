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

  objEstacionamiento = {
    horas: 0,
    minutos: 0,
    total: 0
  }

  constructor() { }

  ngOnInit() {
    this.objEstacionamiento.total = 0;
  }

  calcularTotal() {
    this.objEstacionamiento.total = this.objEstacionamiento.horas * 1500;
    if (this.objEstacionamiento.minutos > 0) {
      this.objEstacionamiento.total += (this.objEstacionamiento.minutos / 60) * 1500;
    }
  }

}
