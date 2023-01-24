import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { BehaviorSubject } from 'rxjs';

import { Game } from '../models/game/game';
import { ResultsComponent } from '../bottom-sheets/results/results.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guess-player',
  templateUrl: './guess-player.component.html',
  styleUrls: ['./guess-player.component.scss']
})
export class GuessPlayerComponent {

  private guessPlayerGameList: Game[];
  private currentGame: BehaviorSubject<Game>;
  private randomGame: number;
  private interval: any;
  private bottomSheetRef = {} as MatBottomSheetRef<ResultsComponent>;
  private href: string;

  public clueList: string[];
  public isFound: boolean = false;
  public playerForm: FormControl = new FormControl('', Validators.required);
  public roundCounter: number = 0;
  public successCounter: number = 0;
  public respIsValid: boolean = false;
  public timeLeft: number;

  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) {
    this.guessPlayerGameList = (<Game[]>JSON.parse(localStorage['game_list'])).filter((game: Game) => game.gameType.id === 1);
    this.randomGame = Math.floor(Math.random() * this.guessPlayerGameList.length);
    this.currentGame = new BehaviorSubject(
      this.guessPlayerGameList[this.randomGame]
    );
    this.clueList = this.guessPlayerGameList[this.randomGame].clueList;
    this.timeLeft = this.guessPlayerGameList[this.randomGame].gameType.timer;
    this.startTimer();
    this.href = this.router.url;
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.roundCounter++;
        this.openBottomSheet();
      }
    }, 1000)
  }

  stopTimer(): void {
    clearInterval(this.interval);
  }

  foundToggler(): void {
    this.isFound = true;
    this.stopTimer();
  }

  openBottomSheet(): void {
    this.stopTimer();
    this.bottomSheetRef = this.bottomSheet.open(ResultsComponent, {
      data: {
        roundCounter: this.roundCounter,
        successCounter: this.successCounter,
        respIsValid: this.respIsValid,
        timeLeft: this.timeLeft
      }
    });
    this.bottomSheetRef.afterDismissed().subscribe(() => {
      // if (this.respIsValid) {
      //   this.currentGame.next(
      //     this.guessPlayerGameList[this.randomGame]
      //   );
      //   this.timeLeft =       this.guessPlayerGameList[this.randomGa.gameType.timer;
      //   this.respIsValid = false;
      // }
      // this.timeLeft = 5;
      this.isFound = false;
      this.playerForm.reset();
      if (this.router.url === this.href) {
        this.startTimer()
      }
    });
  }

  onSubmit(): void {
    const acceptableAnswersMapped: string[] = this.guessPlayerGameList[this.randomGame].player.acceptableAnswers.map(r => r.toLowerCase());
    const playerFormLower = this.playerForm.value.toLowerCase();
    if (acceptableAnswersMapped.includes(playerFormLower)) {
      this.roundCounter++;
      this.successCounter++;
      this.respIsValid = true;
    }
    this.openBottomSheet();
  }
}
