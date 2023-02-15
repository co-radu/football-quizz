import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public links: string[] = ['games', 'gametypes', 'players', 'jerseys', 'compositions'];
  public appName: string = 'Football Quizz';
  public appVersion: string = 'v0.1';
}
