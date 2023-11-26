import { Component } from '@angular/core';
import { PreguntaTresService } from './pregunta-tres.service';
import { preguntatres } from './preguntatres';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pregunta-tres',
  templateUrl: './pregunta-tres.component.html',
  styleUrl: './pregunta-tres.component.css'

})
export class PreguntaTresComponent {

  preguntatres: preguntatres[] = []

  constructor(private preguntatresService: PreguntaTresService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.preguntatresService.getEpisodes()
      .subscribe((episodes: preguntatres[]) => {
        this.preguntatres = episodes;
      },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', { duration: 50000 });
        }
      );
  }

  // Muestra los episodios con el ID impar
  getEpisodiosImpares() {
    return this.preguntatres.filter((episode: preguntatres) => episode.id % 2 === 1);
  }


}
