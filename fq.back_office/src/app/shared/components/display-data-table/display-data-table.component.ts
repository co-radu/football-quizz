import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Composition } from 'src/app/models/composition/composition';
import { GameType } from 'src/app/models/game-type/game-type';
import { Game } from 'src/app/models/game/game';
import { Jersey } from 'src/app/models/jersey/jersey';
import { Player } from 'src/app/models/player/player';

@Component({
  selector: 'app-display-data-table[data]',
  templateUrl: './display-data-table.component.html',
  styleUrls: ['./display-data-table.component.scss']
})
export class DisplayDataTableComponent implements OnInit {
  @Input() data: Array<Game|GameType> = [];
  @Input() link: string = '';

  public headers: string[] = [];

  ngOnInit(): void {
    this.headers = Object.keys(this.data[0]);
  }

}
