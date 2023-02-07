import { Composition } from "../composition/composition";
import { GameType } from "../game-type/game-type";
import { Jersey } from "../jersey/jersey";
import { Player } from "../player/player";

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

