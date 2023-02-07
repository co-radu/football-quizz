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
    console.log(this.activatedRoute.snapshot.url[0].path)
  }

}
