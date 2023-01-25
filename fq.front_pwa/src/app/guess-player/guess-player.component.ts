import { Component } from '@angular/core';

import { Game } from '../models/game/game';

@Component({
    selector: 'app-guess-player',
    templateUrl: './guess-player.component.html',
    styleUrls: ['./guess-player.component.scss']
})
export class GuessPlayerComponent {

    constructor() { }

    answerCheck(currentGame: Game, responseInput: string): boolean {
        const acceptableAnswersMapped: string[] = currentGame.player.acceptableAnswers.map(r => r.toLowerCase());
        const responseToLowerCase = responseInput.toLowerCase();
        if (acceptableAnswersMapped.includes(responseToLowerCase)) {
            return true;
        } else {
            return false;
        }
    }
}
