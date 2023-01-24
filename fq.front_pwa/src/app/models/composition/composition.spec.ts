import { Composition } from './composition';

describe('Composition', () => {
    it('should create an instance', () => {
        expect(new Composition(
            16,
            "Finale Coupe du monde 2022",
            [
                "France",
                "Argentine"
            ],
            "http://compo_france.fr",
            [
                {
                    "id": 2,
                    "firstName": "Olivier",
                    "lastName": "Giroud",
                    "acceptableAnswers": [
                        "Olivier",
                        "Giroud",
                        "Olivier Giroud"
                    ],
                    "pictureUrl": "http://olivier_giroud.com"
                }
            ]
        )).toBeTruthy();
    });
});
