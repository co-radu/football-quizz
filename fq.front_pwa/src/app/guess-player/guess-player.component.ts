import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { BehaviorSubject } from 'rxjs';

import { Game } from '../models/game/game';
import { SuccessComponent } from '../bottom-sheets/success/success.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guess-player',
  templateUrl: './guess-player.component.html',
  styleUrls: ['./guess-player.component.scss']
})
export class GuessPlayerComponent implements OnInit {

  private guessPlayerGameList: Game[];
  private currentGame: BehaviorSubject<Game>;
  private randomGame: number;
  private interval: any;
  private bottomSheetRef = {} as MatBottomSheetRef<SuccessComponent>;
  private href: string;

  public testCounter: number = 1;
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

  ngOnInit(): void {

    // this.timeLeft = 5;
    // this.testCounter = 1;
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
    this.bottomSheetRef = this.bottomSheet.open(SuccessComponent, {
      data: {
        roundCounter: this.roundCounter,
        successCounter: this.successCounter,
        testCounter: this.testCounter,
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
    } else if (this.testCounter < 2) {
      this.testCounter++;
    } else {
      this.roundCounter++;
    }
    this.openBottomSheet();
  }
}
