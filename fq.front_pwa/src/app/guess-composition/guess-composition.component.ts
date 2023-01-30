import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../models/player/player';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-guess-composition',
  templateUrl: './guess-composition.component.html',
  styleUrls: ['./guess-composition.component.scss']
})
export class GuessCompositionComponent {

  @Output('onSubmit')
  public onSubmit: EventEmitter<any> = new EventEmitter();

  compositionCheck(currentGame: Game) {
    return true;
  }
}
