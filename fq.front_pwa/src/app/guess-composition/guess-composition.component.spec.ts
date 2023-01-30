import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessCompositionComponent } from './guess-composition.component';

describe('GuessCompositionComponent', () => {
  let component: GuessCompositionComponent;
  let fixture: ComponentFixture<GuessCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessCompositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
