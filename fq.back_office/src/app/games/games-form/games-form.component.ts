import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { GameTypeService } from 'src/app/shared/services/game-type/game-type.service';

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

  constructor(
    private gameTypeService: GameTypeService,
  ) {
    this.gameTypeService.getGameTypeList().subscribe(
      (gameTypesList: GameType[]) => {
        this.gameTypesList = gameTypesList;
      }
    );
  }

  get clues(): FormArray {
    return this.gameForm.get('clues') as FormArray;
  }

  get gameType(): FormControl {
    return this.gameForm.get('gameType') as FormControl;
  }

  onSubmit(): void {
    console.log(this.gameForm.get('gameType'))
  }
}
