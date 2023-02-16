// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { GamesDisplayComponent } from './games-display.component';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('GamesDisplayComponent', () => {
//   let component: GamesDisplayComponent;
//   let fixture: ComponentFixture<GamesDisplayComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [GamesDisplayComponent]
//     })
//       .compileComponents();

//     fixture = TestBed.createComponent(GamesDisplayComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

function randomSelected(games: Object[]): number {
    return Math.floor(Math.random() * games.length);
}

describe('Random method', () => {

    xit('should add random game', () => {

        const games: Object[] = [
            { "label": "test1" },
            { "label": "test2" },
            { "label": "test3" },
            { "label": "test4" },
            { "label": "test5" },
        ];

        const randomNumber: number[] = [
            0,
            1,
            2,
            3,
            4
        ];
        throw new Error('work in progress!');
    });

});