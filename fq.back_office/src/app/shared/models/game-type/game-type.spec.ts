import { GameType } from './game-type';

describe('GameType', () => {
    it('should create an instance', () => {
        expect(new GameType(
            2,
            50,
            "Trouve le joueur",
            [
                {
                    "id": 5,
                    "gameType": {
                        "id": 3,
                        "timer": 50,
                        "label": "Trouve le joueur",
                        "games": []
                    },
                    "clueList": [
                        "Je suis de nationalité française",
                        "Je suis le meilleur but de l'équipe de france",
                        "J'ai plus de 30 ans",
                        "J'ai joué à Arsenal"
                    ],
                    "jersey": {
                        "id": 2,
                        "team": "Brésil",
                        "season": 2022,
                        "pictureUrl": "http://bresil-jersey.com"
                    },
                    "player": {
                        "id": 2,
                        "firstName": "Olivier",
                        "lastName": "Giroud",
                        "acceptableAnswers": [
                            "Olivier",
                            "Giroud",
                            "Olivier Giroud"
                        ],
                        "pictureUrl": "http://olivier.giroud.com"
                    },
                    "composition": {
                        "id": 16,
                        "label": "Finale Coupe du monde 2022",
                        "teamList": [
                            "France",
                            "Argentine"
                        ],
                        "pictureUrl": "http://compo_france.fr",
                        "playerList": [
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
                    }
                }
            ]
        )).toBeTruthy();
    });
});
