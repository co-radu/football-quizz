import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game/game';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor() { }

  private gamesList: Game[] = <Game[]>JSON.parse(localStorage['game_list']);

  gamesForParty(gameTypeId?: number): Game[] {
    const gamesForParty: Game[] = [];
    let games: Game[] = this.gamesList;
    let numberGamesInParty: number = 2;
    if (gameTypeId) {
      games = games.filter((game: Game) => game.gameType.id === gameTypeId);
      if (gameTypeId === 3) {
        numberGamesInParty = 1;
      }
    }
    let gameRandom: Game = games[Math.floor(Math.random() * games.length)];
    do {
      if (gamesForParty.includes(gameRandom)) {
        gameRandom = games[Math.floor(Math.random() * games.length)];
      } else {
        gamesForParty.push(gameRandom);
      }
    } while (gamesForParty.length < numberGamesInParty);
    return gamesForParty;
  }
}
