import { Component } from '@angular/core';
import { Jersey } from '../models/jersey/jersey';
import { JerseyService } from '../services/jersey/jersey.service';

@Component({
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['./jersey.component.scss']
})
export class JerseyComponent {
  public jerseyList: Jersey[] = [];
  public displayedColumns: string[] = ['id', 'team', 'season'];

  constructor(private jerseyService: JerseyService) {
    this.jerseyService.getJerseyList().subscribe(((jerseyList: Jersey[]) => this.jerseyList = jerseyList));
  }

}
