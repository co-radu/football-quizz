import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { ResultsComponent } from '../bottom-sheets/results/results.component';
import { GuessPlayerComponent } from '../guess-player/guess-player.component';
import { GameType } from '../models/game-type/game-type';
import { Game } from '../models/game/game';

@Component({
    selector: 'app-games-display',
    templateUrl: './games-display.component.html',
    styleUrls: ['./games-display.component.scss'],
})
export class GamesDisplayComponent {

    @ViewChild('guessPlayer')
    public guessPlayerComponent!: GuessPlayerComponent;

    private gameTypeList: GameType[] = (<GameType[]>JSON.parse(localStorage['game_type_list']));
    private currentGameTypeId: number = +(<string>this.route.snapshot.paramMap.get('gameTypeId'));
    private currentGameType: GameType = (<GameType>this.gameTypeList.find((gameType: GameType) => gameType.id === this.currentGameTypeId));

    public gamesForParty: Game[] = this.randomSelectedGames();
    private gameIterator: IterableIterator<Game> = this.gamesForParty.values();
    public currentGame: Game = this.gameIterator.next().value;

    private interval: any;
    public timeLeft: number = 5;
    public buttonIsVisible: boolean = true;
    public responseInput: FormControl = new FormControl('', Validators.required);
    public responseIsValid: boolean = false;

    private bottomSheetRef = {} as MatBottomSheetRef<ResultsComponent>;
    public numberGamesInParty: number = this.gamesForParty.length;
    public successCounter: number = 0;
    public gameIndex: number = this.gamesForParty.indexOf(this.currentGame);

    constructor(
        private route: ActivatedRoute,
        private bottomSheet: MatBottomSheet
    ) {
        this.startTimer();
    }

    randomSelectedGames(): Game[] {
        const gamesArray: Game[] = [];
        let gameRandom: Game = this.currentGameType.games[Math.floor(Math.random() * this.currentGameType.games.length)];
        do {
            if (gamesArray.includes(gameRandom)) {
                gameRandom = this.currentGameType.games[Math.floor(Math.random() * this.currentGameType.games.length)];
            } else {
                gamesArray.push(gameRandom);
            }
        } while (gamesArray.length < 5);
        return gamesArray;
    }

    startTimer(): void {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            } else {
                clearInterval(this.interval);
                this.nextGame();
            }
        }, 1000)
    }

    inputIsVisible(): void {
        this.buttonIsVisible = false;
        clearInterval(this.interval);
    }

    onSubmit(): void {
        this.responseIsValid = this.guessPlayerComponent.answerCheck(this.currentGame, this.responseInput.value);
        if (this.responseIsValid) {
            this.successCounter++;
            console.log('Bravo! - Jeu Suivant!')
        } else {
            console.log('Essaye encore!')
        }
        this.openBottomSheet();
    }

    nextGame(): void {
        if (this.gameIndex < (this.gamesForParty.length - 1)) {
            this.currentGame = this.gameIterator.next().value;
            this.gameIndex++;
            this.timeLeft = 5;
        } else {
            console.log('Partie terminée!')
        }
    }

    openBottomSheet(): void {
        this.bottomSheetRef = this.bottomSheet.open(ResultsComponent, {
            data: {
                numberGamesInParty: this.numberGamesInParty,
                successCounter: this.successCounter,
                responseIsValid: this.responseIsValid,
                timeLeft: this.timeLeft,
                gameIndex: (this.gameIndex + 1),
            }
        });


        this.bottomSheetRef.afterDismissed().subscribe(() => {
            this.buttonIsVisible = true;
            this.responseInput.reset();
            this.nextGame();
            this.startTimer();
        });
    }
}

  // if (this.respIsValid) {
            //   this.currentGame.next(
            //     this.guessPlayerGameList[this.randomGame]
            //   );
            //   this.timeLeft =       this.guessPlayerGameList[this.randomGa.gameType.timer;
            //   this.respIsValid = false;
            // }
            // this.timeLeft = 5;
            // this.isFound = false;
            // this.playerForm.reset();
            // if (this.router.url === this.href) {
            //     this.startTimer()
            // }