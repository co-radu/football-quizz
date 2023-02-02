import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public buttonsTitles: string[] = ['Gametype', 'Player', 'Jersey', 'Composition'];

  constructor(private router: Router) {}

  redirectTo(index: number): void {
    this.router.navigate([this.buttonsTitles[index].toLowerCase()]);
  }
}
