import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../models/game/game';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    season: new FormControl('', Validators.required),
  });

  jerseyCheck(currentGame: Game): boolean {
    let teamForm: string = this.jerseyForm.get('team')?.value;
    let seasonForm: number = this.jerseyForm.get('team')?.value;
    if (teamForm === currentGame.jersey.team && seasonForm === currentGame.jersey.season) {
      return true;
    } else {
      return false;
    }
  }
}
