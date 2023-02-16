import { Game } from "../game/game";

export class GameType {

    constructor(id: number, timer: number, label: string, games: Game[]) {
        this.id = id;
        this.timer = timer;
        this.label = label;
        this.games = games;
    }

    id: number;
    timer: number;
    label: string;
    games: Game[];
}
