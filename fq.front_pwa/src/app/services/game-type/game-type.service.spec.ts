import { TestBed } from '@angular/core/testing';

import { GameTypeService } from './game-type.service';
import { HttpClientModule } from '@angular/common/http';

describe('GameTypeService', () => {
    let service: GameTypeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ]
        });
        service = TestBed.inject(GameTypeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
