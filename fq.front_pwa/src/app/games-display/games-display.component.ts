import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsComponent } from '../bottom-sheets/results/results.component';
import { GuessCompositionComponent } from '../guess-composition/guess-composition.component';
import { GuessJerseyComponent } from '../guess-jersey/guess-jersey.component';
import { GuessPlayerComponent } from '../guess-player/guess-player.component';
import { Game } from '../models/game/game';
import { PartyService } from '../services/party/party.service';

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

    @ViewChild('guessComposition')
    private guessCompositionComponent!: GuessCompositionComponent;

    private routeParam: number = +<string>this.route.snapshot.paramMap.get('gameTypeId');
    public gamesForParty: Game[];
    public currentGame: Game;
    public gameIndex: number = 0;
    public currentGameTypeId: number;

    private interval: any;
    public timeLeft: number = 50;
    public buttonIsVisible: boolean = true;

    private bottomSheetRef = {} as MatBottomSheetRef<ResultsComponent>;
    public numberGamesInParty: number = 2;
    public responseInput: FormControl = new FormControl('', Validators.required);
    public responseIsValid: boolean = false;
    public successCounter: number = 0;

    constructor(
        private route: ActivatedRoute,
        private bottomSheet: MatBottomSheet,
        private router: Router,
        private partyService: PartyService
    ) {
        this.gamesForParty = this.partyService.gamesForParty(this.routeParam);
        this.currentGame = this.gamesForParty[this.gameIndex];
        this.currentGameTypeId = this.currentGame.gameType.id;
        // this.startTimer();
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
        let checkComposition: boolean = this.currentGameTypeId === 3 ? this.guessCompositionComponent.compositionCheck(this.currentGame) : false;
        if (checkPlayer || checkJersey || checkComposition) {
            this.responseIsValid = true;
            this.successCounter++;
        }
        this.openBottomSheet();
    }

    nextGame(): void {
        if (this.gameIndex < (this.gamesForParty.length - 1)) {
            this.gameIndex++;
            this.currentGame = this.gamesForParty[this.gameIndex];
            this.timeLeft = 5;
        }
    }

    redirectToHome() {
        clearInterval(this.interval);
        this.router.navigate(['']);
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
                } else {
                    this.redirectToHome();
                }
                this.buttonIsVisible = true;
                this.responseInput.reset();
            }
        );
    }
}