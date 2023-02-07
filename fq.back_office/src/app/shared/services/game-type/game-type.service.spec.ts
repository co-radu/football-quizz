import { TestBed } from '@angular/core/testing';

import { GameTypeService } from './game-type.service';

describe('GameTypeService', () => {
  let service: GameTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
