import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  public numberGamesInParty: number = this.data.numberGamesInParty;
  public successCounter: number = this.data.successCounter;
  public timeLeft: number = this.data.timeLeft;
  public responseIsValid: boolean = this.data.responseIsValid;
  public gameIndex: number = this.data.gameIndex;

  public templateToDisplay: string = "";
  public timeToRetry: number = 3;
  private interval: any;

  private homeIsRequest: boolean = false;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {
      numberGamesInParty: number,
      successCounter: number,
      responseIsValid: boolean,
      timeLeft: number,
      gameIndex: number,
    },
    private bottomSheetRef: MatBottomSheetRef<ResultsComponent>,
  ) {
    if (!this.responseIsValid && this.timeLeft > 0) {
      this.templateToDisplay = "try_again";
      this.startRetryTimer();
    } else if (!this.responseIsValid && this.timeLeft === 0) {
      this.templateToDisplay = "unsuccess";
    }
  }

  bottomSheetDismiss(): void {
    this.homeIsRequest = false;
    this.bottomSheetRef.dismiss(this.homeIsRequest);
  }

  redirectToHome(): void {
    this.homeIsRequest = true;
    this.bottomSheetRef.dismiss(this.homeIsRequest);
  }

  startRetryTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeToRetry > 0) {
        this.timeToRetry--;
      } else {
        clearInterval(this.interval);
        this.bottomSheetDismiss();
      }
    }, 1000)
  }
}
