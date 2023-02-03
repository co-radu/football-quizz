import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-display',
  templateUrl: './entity-display.component.html',
  styleUrls: ['./entity-display.component.scss']
})
export class EntityDisplayComponent {

  private entityType!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe(url => this.entityType = url[0].path);
  }

}
