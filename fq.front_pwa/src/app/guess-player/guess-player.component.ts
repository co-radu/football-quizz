import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { Game } from '../models/game/game';

@Component({
    selector: 'app-guess-player',
    templateUrl: './guess-player.component.html',
    styleUrls: ['./guess-player.component.scss']
})
export class GuessPlayerComponent {

    public responseInput: FormControl = new FormControl('', Validators.required);

    answerCheck(currentGame: Game): boolean {
        const acceptableAnswersMapped: string[] = currentGame.player.acceptableAnswers.map(r => r.toLowerCase());
        const responseToLowerCase = this.responseInput.value.toLowerCase();
        if (acceptableAnswersMapped.includes(responseToLowerCase)) {
            return true;
        } else {
            return false;
        }
    }
}
