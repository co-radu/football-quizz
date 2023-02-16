import { Component, Input, OnInit } from '@angular/core';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { Game } from 'src/app/shared/models/game/game';

@Component({
  selector: 'app-display-data-table[data]',
  templateUrl: './display-data-table.component.html',
  styleUrls: ['./display-data-table.component.scss']
})
export class DisplayDataTableComponent implements OnInit {
  @Input() data: Array<Game | GameType> = [];

  public headers: string[] = [];

  ngOnInit(): void {
    this.headers = Object.keys(this.data[0]);
  }

}
