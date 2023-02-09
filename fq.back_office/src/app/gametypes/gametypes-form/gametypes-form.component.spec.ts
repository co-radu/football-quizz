import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametypesFormComponent } from './gametypes-form.component';

describe('GametypesFormComponent', () => {
  let component: GametypesFormComponent;
  let fixture: ComponentFixture<GametypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GametypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
