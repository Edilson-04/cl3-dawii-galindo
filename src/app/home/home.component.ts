import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  onNavigateToPregunta1(): void {
    this.router.navigate(['preguntauno'], { relativeTo: this.route });
  }

  onNavigateToPregunta2(): void {
    this.router.navigate(['preguntados'], { relativeTo: this.route });
  }

  onNavigateToPregunta3(): void {
    this.router.navigate(['preguntatres'], { relativeTo: this.route });
  }
}
