import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public navBarIsOpened: boolean = true;
  private navBarWidth: string = '280px';

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    if (window.innerWidth > 768) {
      this.navBarIsOpened = true;
    } else if (window.innerWidth <= 768) {
      this.navBarIsOpened = false;
    }
    this.moveNavBar();
  }

  moveNavBar(): void {
    const navBar: HTMLElement = <HTMLElement>document.getElementById('nav');
    const shade: HTMLDivElement = <HTMLDivElement>document.getElementById('shade');
    const layout: HTMLDivElement = <HTMLDivElement>document.getElementById('layout');
    const burgerButton: HTMLDivElement = <HTMLDivElement>document.getElementById('burger');
    if (this.navBarIsOpened) {
      if (window.innerWidth <= 768) {
        layout.style.overflow = 'hidden';
      } else {
        layout.style.overflow = 'auto';
      }
      burgerButton.className = 'closeIcon';
      navBar.style.left = '0';
      shade.style.display = 'block';
      this.navBarIsOpened = false;
    } else {
      burgerButton.className = 'burgerIcon';
      navBar.style.left = `-${this.navBarWidth}`;
      shade.style.display = 'none';
      layout.style.overflow = 'auto';
      this.navBarIsOpened = true;
    }
  }
}
