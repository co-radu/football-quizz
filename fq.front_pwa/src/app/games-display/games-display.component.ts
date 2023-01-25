import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GameType } from '../models/game-type/game-type';
import { Game } from '../models/game/game';
import { GuessPlayerComponent } from '../guess-player/guess-player.component';

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
    public successCounter: number = 0;

    constructor(private route: ActivatedRoute) {
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
        this.buttonIsVisible = true;
        this.responseIsValid = this.guessPlayerComponent.answerCheck(this.currentGame, this.responseInput.value);
        this.responseInput.reset();
        if (this.responseIsValid) {
            this.nextGame();
            this.successCounter++;
            console.log(this.successCounter);
            console.log('Bravo! - Jeu Suivant!')
        } else {
            this.startTimer();
            console.log('Essaye encore!')
        }
    }

    nextGame(): void {
        if (this.gamesForParty.indexOf(this.currentGame) < this.gamesForParty.length - 1) {
            this.currentGame = this.gameIterator.next().value;
            this.timeLeft = 5;
            this.startTimer();
        } else {
            console.log('Partie terminée!')
        }
    }

    // private bottomSheetRef = {} as MatBottomSheetRef<ResultsComponent>;
    //   openBottomSheet(): void {
    //     this.stopTimer();
    //     this.bottomSheetRef = this.bottomSheet.open(ResultsComponent, {
    //       data: {
    //         roundCounter: this.roundCounter,
    //         successCounter: this.successCounter,
    //         respIsValid: this.respIsValid,
    //         timeLeft: this.timeLeft
    //       }
    //     });
    //     this.bottomSheetRef.afterDismissed().subscribe(() => {
    //       // if (this.respIsValid) {
    //       //   this.currentGame.next(
    //       //     this.guessPlayerGameList[this.randomGame]
    //       //   );
    //       //   this.timeLeft =       this.guessPlayerGameList[this.randomGa.gameType.timer;
    //       //   this.respIsValid = false;
    //       // }
    //       // this.timeLeft = 5;
    //       this.isFound = false;
    //       this.playerForm.reset();
    //       if (this.router.url === this.href) {
    //         this.startTimer()
    //       }
    //     });
    //   }
}
