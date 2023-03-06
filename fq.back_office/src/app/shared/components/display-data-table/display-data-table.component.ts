import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-table[data]',
  templateUrl: './display-data-table.component.html',
  styleUrls: ['./display-data-table.component.scss']
})
export class DisplayDataTableComponent implements OnInit {
  @Input() data: any[] = [];

  public headers: string[] = [];

  ngOnInit(): void {
    this.headers = Object.keys(this.data[0]);
  }
}
