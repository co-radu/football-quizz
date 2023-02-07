import { Player } from "../player/player";

export class Composition {

    constructor(
        id: number,
        label: string,
        teamList: string[],
        pictureUrl: string,
        playerList: Player[]
    ) {
        this.id = id;
        this.label = label;
        this.teamList = teamList;
        this.pictureUrl = pictureUrl;
        this.playerList = playerList;
    }

    id: number;
    label: string;
    teamList: string[];
    pictureUrl: string;
    playerList: Player[];
}
