import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public buttonsTitles: string[] = ['games', 'gametype', 'player', 'jersey', 'composition'];

  constructor(private router: Router) { }

  redirectTo(index: number): void {
    if (index === 0) {
      this.router.navigate(['']);
    } else {
      this.router.navigate([this.buttonsTitles[index].toLowerCase()]);
    }
  }
}
