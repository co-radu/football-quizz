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
  public displayedColumns: string[] = ['id', 'label', 'timer', 'delete']

  public gameTypeForm: FormGroup = new FormGroup({
    label: new FormControl(),
    timer: new FormControl()
  });
  public gameTypeFormIsVisible: boolean = false;

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
    const newGameType: GameType = new GameType(this.gameTypeForm.value.timer, this.gameTypeForm.value.label);
    this.gameTypeService.createGameType(newGameType).subscribe(() => {
      this.getGameTypeList();
      this.gameTypeFormIsVisible = false;
    });
  }

  deleteGameType(id: number): void {
    this.gameTypeService.deleteGameType(id).subscribe(() => this.getGameTypeList());
  }
}
