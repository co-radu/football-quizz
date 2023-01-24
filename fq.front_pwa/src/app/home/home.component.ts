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

  private gameTypeList: GameType[] = JSON.parse(localStorage['game_type_list']);

  public gameTypeLabels: string[];

  constructor(private router: Router) {
    this.gameTypeLabels = this.gameTypeList.map((gameType: GameType) => gameType.label);
  }

  fetchGames(index: number): Game[] {
    this.router.navigate(['/games_display']);
    return this.gameTypeList[index].games;
  }
}