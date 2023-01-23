interface GameType {
    id: number;
    timer: number;
    label: string;
}

interface Jersey {
    id: number;
    team: string;
    season: number;
    pictureUrl: string;
}

interface Player {
    id: number;
    firstName: string;
    lastName: string;
    acceptableAnswers: string[];
    pictureUrl: string;
}

interface Composition {
    id: number;
    label: number;
    teamList: string[];
    pictureUrl: string;
    playerList: Player[];
}

export class Game {

    constructor(
        id: number,
        gameType: GameType,
        clueList: string[],
        jersey: Jersey,
        player: Player,
        composition: Composition
    ) {
        this.id = id;
        this.gameType = gameType;
        this.clueList = clueList;
        this.jersey = jersey;
        this.player = player;
        this.composition = composition;
    }

    id: number;
    gameType: GameType;
    clueList: string[];
    jersey: Jersey;
    player: Player;
    composition: Composition;
}

