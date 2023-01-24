import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessPlayerComponent } from './guess-player.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

describe('GuessPlayerComponent', () => {
    let component: GuessPlayerComponent;
    let fixture: ComponentFixture<GuessPlayerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatBottomSheetModule
            ],
            declarations: [GuessPlayerComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(GuessPlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
