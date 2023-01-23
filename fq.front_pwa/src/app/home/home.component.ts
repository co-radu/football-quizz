import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private gameListSaved: Game[] = JSON.parse(localStorage['game_list']);

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    if (navigator.onLine) {
      this.gameService.getGameList().subscribe(
        (gameList: Game[]) => {
          if (!this.compareArrays(gameList, this.gameListSaved))
            localStorage.setItem('game_list', JSON.stringify(gameList));
        }
      )
    }
  }

  compareArrays(arrA: Game[], arrB: Game[]) {
    return JSON.stringify(arrA) === JSON.stringify(arrB);
  }
}