import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { GameTypeService } from 'src/app/shared/services/game-type/game-type.service';
import { Player } from '../../models/player/player';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.scss']
})
export class CreateEditFormComponent {

  public gameForm: FormGroup = new FormGroup({
    gameType: new FormControl('', Validators.required),
    clueList: new FormControl('', Validators.required),
    jersey: new FormControl(),
    player: new FormControl(),
    composition: new FormControl()
  });

  public gameTypeForm: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    timer: new FormControl('', Validators.required)
  });

  public playerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl('', Validators.required),
    acceptableAnswers: new FormControl(),
    pictureUrl: new FormControl()
  });

  public jerseyForm: FormGroup = new FormGroup({
    team: new FormControl('', Validators.required),
    season: new FormControl('', Validators.required),
    pictureUrl: new FormControl()
  });

  public compositionForm: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    team: new FormControl('', Validators.required),
    pictureUrl: new FormControl(),
    playerList: new FormControl('', Validators.required)
  });

  public gameTypesList: GameType[] = [];
  public dataTypeToCreate: string = this.router.url.split("/")[1];

  constructor(
    private gameTypeService: GameTypeService,
    private playerService: PlayerService,
    private router: Router,
  ) {
    this.gameTypeService.getGameTypeList().subscribe(
      (gameTypesList: GameType[]) => {
        this.gameTypesList = gameTypesList;
      }
    );
  }

  onSubmit(): void {
    switch (this.dataTypeToCreate) {
      case 'games':

        break;
      case 'gametypes':
        const gameTypeRawValue: any = this.gameTypeForm.getRawValue();
        const gameTypeToCreate: GameType = new GameType(gameTypeRawValue.timer, gameTypeRawValue.label);
        this.gameTypeService.createGameType(gameTypeToCreate).subscribe(() => { this.router.navigate(['gametypes']) });
        break;
      case 'players':
        const playerRawValue: any = this.playerForm.getRawValue();
        const playerToCreate: Player = new Player(playerRawValue.firstName, playerRawValue.lastName, playerRawValue.acceptableAnswers, playerRawValue.pictureUrl);
        break;
      case 'jerseys':

        break;
      case 'compositions':

        break;
    }
  }
}
