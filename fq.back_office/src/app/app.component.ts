import { Component } from '@angular/core';
import { NavigationService } from './shared/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private navigation: NavigationService) {
    this.navigation.startSaveHistory();
  }
}
