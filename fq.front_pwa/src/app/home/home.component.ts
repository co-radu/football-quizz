import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from '../models/game-type/game-type';

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

  redirectToAndFetchGames(index: number): void {
    this.router.navigate(['/games_display']);
    console.log(this.gameTypeList[index]); // Add .games for recover game list attached to this game type.
  }
}