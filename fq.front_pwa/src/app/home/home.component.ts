import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {

    this.gameService.getGameList().subscribe(
      (gameList: Game[]) => {
        localStorage.setItem('game_list', JSON.stringify(gameList));
      }
    )
  }
}