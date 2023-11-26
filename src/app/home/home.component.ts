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
    this.router.navigate(['pregunta1'], { relativeTo: this.route });
  }

  onNavigateToPregunta2(): void {
    this.router.navigate(['pregunta2'], { relativeTo: this.route });
  }

  onNavigateToPregunta3(): void {
    this.router.navigate(['pregunta3'], { relativeTo: this.route });
  }
}
