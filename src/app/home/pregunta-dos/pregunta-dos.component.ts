import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-dos',
  templateUrl: './pregunta-dos.component.html',
  styleUrl: './pregunta-dos.component.css'
})
export class PreguntaDosComponent {


  notas: number[] = [10, 9, 8, 7];
  promedio: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calcularPromedio() {
    // Ordenar las notas en orden descendente
    this.notas.sort((a, b) => b - a);

    // Eliminar la nota más baja
    this.notas.splice(this.notas.length - 1, 1);

    // Multiplicar cada nota restante por su peso correspondiente
    const notasPonderadas = this.notas.map((nota) => nota * 0.2 + nota * 0.3 + nota * 0.5);

    // Sumar los resultados de las multiplicaciones
    const suma = notasPonderadas.reduce((a, b) => a + b);

    // Dividir el resultado por la cantidad de notas restantes
    this.promedio = suma / notasPonderadas.length;
  }

}
