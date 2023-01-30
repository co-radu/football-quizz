import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-guess-jersey',
  templateUrl: './guess-jersey.component.html',
  styleUrls: ['./guess-jersey.component.scss']
})
export class GuessJerseyComponent {

  @Output('onSubmit')
  public onSubmit: EventEmitter<any> = new EventEmitter();

  @Input()
  public currentGameTypeId: string = '';

  public jerseyForm: FormGroup = new FormGroup({
    team: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });

  public yearsForSelectInput: number[] = this.makeYearArray();

  makeYearArray(): number[] {
    const currentYear: Date = new Date(Date.now());
    const startingYear: number = 1960;
    const yearArray: number[] = [];
    for (let i = startingYear; i <= currentYear.getFullYear(); i++) {
      yearArray.push(i);
    }
    return yearArray;
  }

  jerseyCheck(currentGame: Game): boolean {
    let teamForm: string = this.jerseyForm.get('team')?.value.toLowerCase();
    let seasonForm: number = this.jerseyForm.get('year')?.value;
    if (teamForm === currentGame.jersey.team.toLowerCase() && seasonForm === currentGame.jersey.season) {
      return true;
    } else {
      return false;
    }
  }
}
