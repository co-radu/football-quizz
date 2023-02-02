import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from '../models/game-type/game-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private gameTypeList: GameType[] = <GameType[]>JSON.parse(localStorage['game_type_list']);
  public gameTypeLabels: string[] = this.gameTypeList.map((gameType: GameType) => gameType.label);


  constructor(private router: Router) { }

  redirectToGameDisplay(index?: number): void {
    this.router.navigate(['/games_display', { gameTypeId: index || index === 0 ? this.gameTypeList[index].id : undefined }]);
  }
}