export class Game {
    
    id: number;
    gameType: {
        id: number;
        timer: number;
        label: string;
    };
    clueList: string[];
    jersey: {
        id: number;
        team: string;
        season: number;
        pictureUrl: string;
    };
    player: {
        id: number;
        firstName: string;
        lastName: string;
        acceptableAnswers: string[];
        pictureUrl: string;
    };
    composition: {
        id: number;
        label: number;
        teamList: string[];
        pictureUrl: string;
        playerList: [
            {
                id: number;
                firstName: string;
                lastName: string;
                acceptableAnswers: string[];
                pictureUrl: string;
            }
        ];
    }
}

