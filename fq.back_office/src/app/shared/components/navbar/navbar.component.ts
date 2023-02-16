import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() closedNav: EventEmitter<any> = new EventEmitter();

  public links: string[] = ['games', 'gametypes', 'players', 'jerseys', 'compositions'];
  public appName: string = 'Football Quizz';
  public appVersion: number = 0.1;
}
