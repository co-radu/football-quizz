import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameType } from '../models/game-type/game-type';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-games-display',
  templateUrl: './games-display.component.html',
  styleUrls: ['./games-display.component.scss']
})
export class GamesDisplayComponent {

  private gameTypeList: GameType[] = (<GameType[]>JSON.parse(localStorage['game_type_list']));
  private currentGameTypeId: number = +(<string>this.route.snapshot.paramMap.get('gameTypeId'));
  private currentGameType: GameType = (<GameType>this.gameTypeList.find((gameType: GameType) => gameType.id === this.currentGameTypeId));
  private interval: any;


  public gamesForParty: Game[] = this.randomSelectedGames();
  public timeLeft: number = this.currentGameType.timer;
  public responseIsValid: boolean = false;
  public gamerToFind: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.startTimer();
  }

  randomSelectedGames(): Game[] {
    const gamesArray: Game[] = [];
    let gameRandom: Game = this.currentGameType.games[Math.floor(Math.random() * this.currentGameType.games.length)];
    do {
      if (gamesArray.includes(gameRandom)) {
        gameRandom = this.currentGameType.games[Math.floor(Math.random() * this.currentGameType.games.length)];
      } else {
        gamesArray.push(gameRandom);
      }
    } while (gamesArray.length < 5);
    return gamesArray;
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        console.log('You loose!')
        this.stopTimer();
      }
    }, 1000)
  }

  stopTimer(): void {
    clearInterval(this.interval);
  }

  // onSubmit(): void {
  //   const acceptableAnswersMapped: string[] = this.guessPlayerGameList[this.randomGame].player.acceptableAnswers.map(r => r.toLowerCase());
  //   const playerFormLower = this.playerForm.value.toLowerCase();
  //   if (acceptableAnswersMapped.includes(playerFormLower)) {
  //     this.roundCounter++;
  //     this.successCounter++;
  //     this.respIsValid = true;
  //   }
  //   this.openBottomSheet();
  // }
}
