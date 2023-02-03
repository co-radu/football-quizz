import { Component } from '@angular/core';
import { Composition } from '../models/composition/composition';
import { CompositionService } from '../services/composition/composition.service';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss']
})
export class CompositionComponent {
  public compositionList: Composition[] = [];
  public displayedColumns: string[] = ['id', 'label', 'teamList'];

  constructor(private compositionService: CompositionService) {
    this.compositionService.getCompositionList().subscribe(((compositionList: Composition[]) => this.compositionList = compositionList));
  }
}
