import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Composition } from 'src/app/shared/models/composition/composition';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { Game } from 'src/app/shared/models/game/game';
import { Jersey } from 'src/app/shared/models/jersey/jersey';
import { Player } from 'src/app/shared/models/player/player';
import { CompositionsService } from 'src/app/shared/services/compositions/compositions.service';
import { GameTypesService } from 'src/app/shared/services/game-types/game-types.service';
import { GamesService } from 'src/app/shared/services/games/games.service';
import { JerseysService } from 'src/app/shared/services/jerseys/jerseys.service';
import { PlayersService } from 'src/app/shared/services/players/players.service';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.scss']
})
export class GamesFormComponent {

  @Output() newGameEvent: EventEmitter<Game> = new EventEmitter<Game>();

  public minLengthRequired: number = 5;
  public gameForm: FormGroup = new FormGroup({
    gameType: new FormControl('', Validators.required),
    clues: new FormArray([
      new FormControl('', Validators.minLength(this.minLengthRequired)),
      new FormControl('', Validators.minLength(this.minLengthRequired)),
      new FormControl('', Validators.minLength(this.minLengthRequired)),
      new FormControl('', Validators.minLength(this.minLengthRequired)),
    ]),
    jersey: new FormControl('',),
    player: new FormControl('',),
    composition: new FormControl('',)
  });

  public gameTypesList: GameType[] = [];
  public playersList: Player[] = [];
  public jerseysList: Jersey[] = [];
  public compositionsList: Composition[] = [];

  public arrayFoundValues: Player[] = [];

  constructor(
    private gameTypesService: GameTypesService,
    private playersService: PlayersService,
    private jerseysService: JerseysService,
    private compositionsService: CompositionsService,
    private gamesService: GamesService,

  ) {
    this.playersService.getPlayersList().subscribe((playersList: Player[]) => { this.playersList = playersList });
    this.gameTypesService.getGameTypesList().subscribe((gameTypesList: GameType[]) => { this.gameTypesList = gameTypesList });
    this.jerseysService.getJerseysList().subscribe((jerseysList: Jersey[]) => { this.jerseysList = jerseysList });
    this.compositionsService.getCompositionsList().subscribe((compositionsList: Composition[]) => { this.compositionsList = compositionsList });
  }

  get clues(): FormArray {
    return this.gameForm.get('clues') as FormArray;
  }

  get gameType(): FormControl {
    return this.gameForm.get('gameType') as FormControl;
  }

  getPlayerIdFromLastName(): void {
    let inputValue: string = this.gameForm.get('player')?.value.toLowerCase();
    if (inputValue.length >= 3) {
      this.arrayFoundValues = this.playersList.filter(
        (player: Player) => player.lastName.toLowerCase().includes(inputValue)
      );
    }
  }

  onSubmit(): void {
    const playerInGame: Player = <Player>this.playersList.find((player: Player) => player.id === +this.gameForm.get('player')?.value);
    const newGame: Game = new Game(
      this.gameForm.get('gameType')?.value,
      this.gameForm.get('clues')?.value,
      undefined,
      playerInGame,
    );
    this.gamesService.createGame(newGame).subscribe(
      (gameSaved: Game) => {
        this.newGameEvent.emit(gameSaved);
        this.gameForm.reset();
      }
    );
  }

  /*   WORK IN PROGRESS!
  
  
  getJerseyIdFromTeamName(): void {
      let inputValue: string = this.gameForm.get('jersey')?.value.toLowerCase();
      if (inputValue.length >= 3) {
        this.arrayFoundValues = this.jerseysList.filter(
          (jersey: Jersey) => jersey.team.toLowerCase().includes(inputValue)
        );
      }
    }
  
    getCompositionIdFromLabel(): void {
      let inputValue: string = this.gameForm.get('composition')?.value.toLowerCase();
      if (inputValue.length >= 3) {
        this.arrayFoundValues = this.compositionsList.filter(
          (composition: Composition) => composition.label.toLowerCase().includes(inputValue)
        );
      }
    } */
}
