import { Component, Inject } from '@angular/core';
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
  public maxRoundInGame: number = 2;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {
      roundCounter: number,
      successCounter: number
    },
    private bottomSheetRef: MatBottomSheetRef<SuccessComponent>,
    private router: Router
  ) { }

  nextQuestion() {
    this.bottomSheetRef.dismiss();
  }

  redirectToHome() {
    this.router.navigate(['']);
    this.bottomSheetRef.dismiss();
  }
}
