import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { GameTypeService } from 'src/app/shared/services/game-type/game-type.service';

@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.scss']
})
export class CreateEditFormComponent {

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
    private router: Router,
  ) { }
}