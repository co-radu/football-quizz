import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { BehaviorSubject } from 'rxjs';

import { Game } from '../models/game/game';
import { SuccessComponent } from '../bottom-sheets/success/success.component';
import { UnsuccessComponent } from '../bottom-sheets/unsuccess/unsuccess.component';


@Component({
  selector: 'app-guess-player',
  templateUrl: './guess-player.component.html',
  styleUrls: ['./guess-player.component.scss']
})
export class GuessPlayerComponent implements OnInit {

  private guessPlayerGameList: Game[] = [];
  private currentGame: BehaviorSubject<Game>;
  private randomGame: number = Math.floor(Math.random() * this.guessPlayerGameList.length);

  public clueList: string[];
  public isFound: boolean = false;
  public playerForm: FormControl = new FormControl('', Validators.required);
  public roundCounter: number = 0;
  public successCounter: number = 0;

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.pushGuessPlayerGames();
    this.currentGame = new BehaviorSubject(
      this.guessPlayerGameList[this.randomGame]
    );
    this.clueList = this.currentGame.value.clueList;
  }

  pushGuessPlayerGames() {
    let gameList: Game[] = JSON.parse(localStorage['game_list']);
    gameList.forEach(
      (game: Game) => {
        this.guessPlayerGameList.push(game);
      });
  }

  foundToggler() {
    this.isFound = true;
  }

  openBottomSheet(result: string) {
    if (result === "success") {
      this.bottomSheet.open(SuccessComponent, {
        data: {
          roundCounter: this.roundCounter,
          successCounter: this.successCounter
        }
      });
    } else {
      this.bottomSheet.open(UnsuccessComponent);
    }
  }

  onSubmit() {
    const accAnsMapped = this.currentGame.value.player.acceptableAnswers.map(r => r.toLowerCase());
    const playerFormLower = this.playerForm.value.toLowerCase();
    if (accAnsMapped.includes(playerFormLower)) {
      this.roundCounter++;
      this.successCounter++;
      this.openBottomSheet("success");
      this.currentGame.next(
        this.guessPlayerGameList[this.randomGame]
      );
      this.isFound = false;
      this.playerForm.reset();
    } else {
      this.isFound = false;
      this.playerForm.reset();
    }
  }
}
