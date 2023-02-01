import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from '../models/game-type/game-type';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private gameTypeList: GameType[] = localStorage['game_type_list'] ? JSON.parse(localStorage['game_type_list']) : null;
  public gameTypeLabels: string[] = this.gameTypeList.map((gameType: GameType) => gameType.label);

  private gamesList: Game[] = localStorage['game_list'] ? JSON.parse(localStorage['game_list']) : null;


  constructor(private router: Router) { }

  fetchGames(index: number): void {
    this.router.navigate(['/games_display', { gameTypeId: this.gameTypeList[index].id }]);
  }

  // quickGame() {
  //   this.router.navigate(['/games_display', { gameTypeId: 0 }]);
  // }
}