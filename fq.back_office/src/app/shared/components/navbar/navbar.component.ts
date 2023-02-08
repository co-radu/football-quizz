import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public links: string[] = ['games', 'gametypes', 'players', 'jerseys', 'compositions'];
  public frontUrl: string = 'http://localhost:4200';
  private navBarIsOpened: boolean = true;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    if (window.innerWidth > 768) {
      this.navBarIsOpened = true;
    } else if (window.innerWidth <= 768) {
      this.navBarIsOpened = false;
    }
    this.openedNavBar();
  }

  openedNavBar(): void {
    const burgerButton: HTMLDivElement = <HTMLDivElement>document.getElementById('menu');
    const navBar: HTMLElement = <HTMLElement>document.getElementById('nav');
    const pagesBody: HTMLElement = <HTMLElement>document.getElementById('pages');
    const shade: HTMLDivElement = <HTMLDivElement>document.getElementById('shade');
    const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    const navBarWidth: string = '180px';
    if (this.navBarIsOpened) {
      if (window.innerWidth <= 768) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
      burgerButton.className = 'closeButton';
      navBar.style.left = '0';
      pagesBody.style.marginLeft = `${navBarWidth}`;
      setTimeout(() => {
        shade.style.display = 'block';
      }, 250);
      this.navBarIsOpened = false;
    } else {
      burgerButton.className = 'burgerButton';
      navBar.style.left = `-${navBarWidth}`;
      pagesBody.style.marginLeft = '0';
      shade.style.display = 'none';
      body.style.overflow = 'auto';
      this.navBarIsOpened = true;
    }
  }
}
