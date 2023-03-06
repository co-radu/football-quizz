import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/shared/models/player/player';
import { PlayersService } from 'src/app/shared/services/players/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent { }
