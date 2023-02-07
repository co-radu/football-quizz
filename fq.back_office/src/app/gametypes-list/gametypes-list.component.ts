import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { GameTypeService } from 'src/app/shared/services/game-type/game-type.service';

@Component({
  selector: 'app-gametypes-list',
  templateUrl: './gametypes-list.component.html',
  styleUrls: ['./gametypes-list.component.scss']
})
export class GametypesListComponent {

  public entityList: any[] = [];
  public displayedColumns: string[] = ['id', 'label', 'timer', 'edit', 'delete'];
  public entityToModify!: any;
  public createFormIsVisible: boolean = false;
  public editFormIsVisible: boolean = false;

  public gameTypeForm: FormGroup = new FormGroup({
    label: new FormControl(),
    timer: new FormControl()
  });

  public playerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    acceptableAnswers: new FormControl(),
    pictureUrl: new FormControl()
  });

  public jerseyForm: FormGroup = new FormGroup({
    team: new FormControl(),
    season: new FormControl(),
    pictureUrl: new FormControl()
  });

  public compositionForm: FormGroup = new FormGroup({
    label: new FormControl(),
    teamList: new FormControl(),
    pictureUrl: new FormControl(),
    playerList: new FormControl()
  });

  constructor(private gameTypeService: GameTypeService) {
    this.getGameTypeList();
  }

  getGameTypeList(): void {
    this.gameTypeService.getGameTypeList().subscribe(
      (newGameTypeList: GameType[]) => {
        this.entityList = newGameTypeList;
      }
    );
  }

  addGameType(): void {
    if (this.gameTypeForm.valid) {
      const newGameType: GameType = new GameType(this.gameTypeForm.value.timer, this.gameTypeForm.value.label);
      this.gameTypeService.createGameType(newGameType).subscribe(() => {
        this.getGameTypeList();
        this.createFormIsVisible = false;
      });
    } else {
      alert('Please write label and timer !')
    }
  }

  openEditForm(gameTypeId: number): void {
    this.entityToModify = <GameType>this.entityList.find((gameType: GameType) => gameType.id === gameTypeId);
    this.gameTypeForm.controls['label'].setValue(this.entityToModify.label);
    this.gameTypeForm.controls['timer'].setValue(this.entityToModify.timer);
    this.editFormIsVisible = true;
  }

  closeForms(): void {
    this.editFormIsVisible = false;
    this.createFormIsVisible = false;
    this.gameTypeForm.reset();
  }

  editGameType(): void {
    if (this.gameTypeForm.valid) {
      this.entityToModify.label = this.gameTypeForm.controls['label'].value;
      this.entityToModify.timer = this.gameTypeForm.controls['timer'].value;
      this.gameTypeService.editGameType(this.entityToModify).subscribe(() => {
        this.getGameTypeList();
        this.closeForms();
      })
    } else {
      alert('Please write label and timer !')
    }
  }

  removeGameType(gameTypeId: number): void {
    this.entityToModify = <GameType>this.entityList.find((gameType: GameType) => gameType.id === gameTypeId);
    if (this.entityToModify.games?.length === 0) {
      alert(`You removed  game type id #${gameTypeId} !`);
      this.gameTypeService.removeGameType(gameTypeId).subscribe(() => this.getGameTypeList());
    } else {
      alert(`You archived game type id #${gameTypeId} !`);
    }
  }
}
