import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameType } from '../models/game-type/game-type';
import { GameTypeService } from '../services/game-type/game-type.service';

@Component({
  selector: 'app-gametype',
  templateUrl: './gametype.component.html',
  styleUrls: ['./gametype.component.scss']
})
export class GametypeComponent {

  public gameTypeList: GameType[] = [];
  public displayedColumns: string[] = ['id', 'label', 'timer', 'edit', 'delete'];
  public gameTypeToModify!: GameType;

  public gameTypeForm: FormGroup = new FormGroup({
    label: new FormControl(),
    timer: new FormControl()
  });
  public createFormIsVisible: boolean = false;
  public editFormIsVisible: boolean = false;

  constructor(private gameTypeService: GameTypeService) {
    this.getGameTypeList();
  }

  getGameTypeList(): void {
    this.gameTypeService.getGameTypeList().subscribe(
      (newGameTypeList: GameType[]) => {
        this.gameTypeList = newGameTypeList;
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
    this.gameTypeToModify = <GameType>this.gameTypeList.find((gameType: GameType) => gameType.id === gameTypeId);
    this.gameTypeForm.controls['label'].setValue(this.gameTypeToModify.label);
    this.gameTypeForm.controls['timer'].setValue(this.gameTypeToModify.timer);
    this.editFormIsVisible = true;
  }

  closeForms(): void {
    this.editFormIsVisible = false;
    this.createFormIsVisible = false;
    this.gameTypeForm.reset();
  }

  editGameType(): void {
    if (this.gameTypeForm.valid) {
      this.gameTypeToModify.label = this.gameTypeForm.controls['label'].value;
      this.gameTypeToModify.timer = this.gameTypeForm.controls['timer'].value;
      this.gameTypeService.editGameType(this.gameTypeToModify).subscribe(() => {
        this.getGameTypeList();
        this.closeForms();
      })
    } else {
      alert('Please write label and timer !')
    }
  }

  deleteGameType(gameTypeId: number): void {
    this.gameTypeService.deleteGameType(gameTypeId).subscribe(() => this.getGameTypeList());
  }
}
