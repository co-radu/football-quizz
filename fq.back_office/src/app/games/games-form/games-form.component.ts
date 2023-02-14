import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Composition } from 'src/app/shared/models/composition/composition';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { Jersey } from 'src/app/shared/models/jersey/jersey';
import { Player } from 'src/app/shared/models/player/player';
import { CompositionsService } from 'src/app/shared/services/compositions/compositions.service';
import { GameTypesService } from 'src/app/shared/services/game-types/game-types.service';
import { JerseysService } from 'src/app/shared/services/jerseys/jerseys.service';
import { PlayersService } from 'src/app/shared/services/players/players.service';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.scss']
})
export class GamesFormComponent {

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
  ) {
    this.getGameTypesList();
    this.getPlayersList();
  }

  get clues(): FormArray {
    return this.gameForm.get('clues') as FormArray;
  }

  get gameType(): FormControl {
    return this.gameForm.get('gameType') as FormControl;
  }

  onSubmit(): void {

    console.log(this.playersList.find(
      (player: Player) => player.id === +this.gameForm.get('player')?.value
    ));
  }

  getGameTypesList(): void {
    this.gameTypesService.getGameTypesList().subscribe(
      (gameTypesList: GameType[]) => {
        this.gameTypesList = gameTypesList;
      }
    );
  }

  getPlayersList(): void {
    this.playersService.getPlayersList().subscribe(
      (playersList: Player[]) => {
        this.playersList = playersList;
      }
    );
  }

  getJerseysList(): void {
    this.jerseysService.getJerseysList().subscribe(
      (jerseysList: Jersey[]) => {
        this.jerseysList = jerseysList;
      }
    )
  }

  getCompositionsList(): void {
    this.compositionsService.getCompositionsList().subscribe(
      (compositionsList: Composition[]) => {
        this.compositionsList = compositionsList;
      }
    );
  }

  getValue(): void {
    let inputValue: string = this.gameForm.get('player')?.value.toLowerCase();
    if (inputValue.length >= 3) {
      this.arrayFoundValues = this.playersList.filter(
        (player: Player) => player.lastName.toLowerCase().includes(inputValue)
      );
    }
  }
}
