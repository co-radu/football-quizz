import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { ResultsComponent } from '../bottom-sheets/results/results.component';
import { GuessJerseyComponent } from '../guess-jersey/guess-jersey.component';
import { GuessPlayerComponent } from '../guess-player/guess-player.component';
import { GameType } from '../models/game-type/game-type';
import { Game } from '../models/game/game';

@Component({
    selector: 'app-games-display',
    templateUrl: './games-display.component.html',
    styleUrls: ['./games-display.component.scss'],
})
export class GamesDisplayComponent {

    // Change timeleft and numberGamesInParty variables when component development is finished.

    @ViewChild('guessPlayer')
    private guessPlayerComponent!: GuessPlayerComponent;

    @ViewChild('guessJersey')
    private guessJerseyComponent!: GuessJerseyComponent;

    private bottomSheetRef = {} as MatBottomSheetRef<ResultsComponent>;


    private gameTypeList: GameType[] = (<GameType[]>JSON.parse(localStorage['game_type_list']));
    public currentGameTypeId: number = +(<string>this.route.snapshot.paramMap.get('gameTypeId'));
    private currentGameType: GameType = (<GameType>this.gameTypeList.find((gameType: GameType) => gameType.id === this.currentGameTypeId));

    public numberGamesInParty: number = 2;
    public gamesForParty: Game[] = this.randomSelectedGames();

    private gameIterator: IterableIterator<Game> = this.gamesForParty.values();
    public currentGame: Game = this.gameIterator.next().value;
    public gameIndex: number = this.gamesForParty.indexOf(this.currentGame);

    private interval: any;
    public timeLeft: number = 5;
    public buttonIsVisible: boolean = true;

    public responseInput: FormControl = new FormControl('', Validators.required);
    public responseIsValid: boolean = false;
    public successCounter: number = 0;

    constructor(
        private route: ActivatedRoute,
        private bottomSheet: MatBottomSheet,
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
        } while (gamesArray.length < this.numberGamesInParty);
        return gamesArray;
    }

    startTimer(): void {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            } else {
                clearInterval(this.interval);
                this.openBottomSheet();
            }
        }, 1000)
    }

    inputIsVisible(): void {
        this.buttonIsVisible = false;
        clearInterval(this.interval);
    }

    onSubmit(): void {
        let checkPlayer: boolean = this.currentGameTypeId === 1 ? this.guessPlayerComponent.answerCheck(this.currentGame) : false;
        let checkJersey: boolean = this.currentGameTypeId === 2 ? this.guessJerseyComponent.jerseyCheck(this.currentGame) : false;
        if (checkPlayer || checkJersey) {
            this.responseIsValid = true;
            this.successCounter++;
        }
        this.openBottomSheet();
    }

    nextGame(): void {
        if (this.gameIndex < (this.gamesForParty.length - 1)) {
            this.currentGame = this.gameIterator.next().value;
            this.gameIndex++;
            this.timeLeft = 5;
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
        this.bottomSheetRef.afterDismissed().subscribe(
            (homeIsRequest: boolean) => {
                if (!homeIsRequest) {
                    this.startTimer();
                    if (this.responseIsValid || this.timeLeft === 0) {
                        this.nextGame();
                    }
                }
                this.buttonIsVisible = true;
                this.responseInput.reset();
            }
        );
    }
}