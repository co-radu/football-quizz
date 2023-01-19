import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-guess-player',
  templateUrl: './guess-player.component.html',
  styleUrls: ['./guess-player.component.scss']
})
export class GuessPlayerComponent implements OnInit {

  guessPlayerGameList: Game[] = [];
  timer: number;
  interval: any;

  ngOnInit(): void {
    this.pushGuessPlayerGames();
  }

  pushGuessPlayerGames() {
    let gameList: Game[] = JSON.parse(localStorage['game_list']);
    gameList.forEach(
      (game: Game) => {
        this.guessPlayerGameList.push(game);
      });
    this.timer = gameList[0].gameType.timer;
  }
}
