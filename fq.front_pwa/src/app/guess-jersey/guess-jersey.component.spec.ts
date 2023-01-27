import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessJerseyComponent } from './guess-jersey.component';

describe('GuessJerseyComponent', () => {
  let component: GuessJerseyComponent;
  let fixture: ComponentFixture<GuessJerseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessJerseyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessJerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
