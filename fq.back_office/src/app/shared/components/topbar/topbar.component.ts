import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Output() openedNav: EventEmitter<any> = new EventEmitter();

  @Input() navBarIsOpened: boolean = false;

  openedNavBar(): void {
    const burgerButton: HTMLDivElement = <HTMLDivElement>document.getElementById('burger');
    this.openedNav.emit();
    if (this.navBarIsOpened) {
      burgerButton.className = 'closeIcon';
    } else {
      burgerButton.className = 'burgerIcon';
    }
  }
}
