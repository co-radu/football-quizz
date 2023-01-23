import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  public roundCounter: number = this.data.roundCounter;
  public successCounter: number = this.data.successCounter;
  public testCounter: number = this.data.testCounter;
  public maxRoundInGame: number = 2;
  public timeLeft: number = this.data.timeLeft;
  public templateToDisplay: string = "";
  public timeToRetry: number = 3;
  public repIsValid: boolean = this.data.respIsValid;

  private interval: any;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {
      roundCounter: number,
      successCounter: number,
      testCounter: number,
      respIsValid: boolean,
      timeLeft: number,
    },
    private bottomSheetRef: MatBottomSheetRef<SuccessComponent>,
    private router: Router
  ) {
    if (!this.repIsValid && this.timeLeft > 0) {
      this.templateToDisplay = "try_again";
      this.startTimer();
    } else if (this.timeLeft === 0 || this.testCounter > 2) {
      this.templateToDisplay = "unsuccess";
    }
  }

  nextQuestion() {
    this.bottomSheetRef.dismiss();
  }

  redirectToHome() {
    this.bottomSheetRef.dismiss();
    this.router.navigate(['']);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeToRetry > 0) {
        this.timeToRetry--;
      } else {
        this.bottomSheetRef.dismiss();
      }
    }, 1000)
  }
}
