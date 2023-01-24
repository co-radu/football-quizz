import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDisplayComponent } from './games-display.component';

describe('GamesDisplayComponent', () => {
  let component: GamesDisplayComponent;
  let fixture: ComponentFixture<GamesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
