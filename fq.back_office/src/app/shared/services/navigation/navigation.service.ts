import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private history: string[] = [];

    constructor(private router: Router, private location: Location) { }

    startSaveHistory(): void {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.history.push(event.urlAfterRedirects);
                }
            }
        );
    }

    getCurrent(): string {
        if (this.history.length <= 0) {
            return this.router.url;
        } else {
            return <string>this.history[this.history.length - 1].replace('/', '');
        }
    }

    goBack(): void {
        this.history.pop();

        if (this.history.length > 0) {
            this.location.back();
        } else {
            this.router.navigateByUrl("");
        }
    }
}