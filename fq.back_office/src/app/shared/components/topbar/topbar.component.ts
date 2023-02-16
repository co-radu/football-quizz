import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() moveNavBar: EventEmitter<any> = new EventEmitter();

  @Input() navBarIsOpened: boolean = false;

  constructor(private navigation: NavigationService) { }

  goBack(): void {
    if (!this.navBarIsOpened) {
      this.moveNavBar.emit();
    }
    this.navigation.goBack();
  }
}
