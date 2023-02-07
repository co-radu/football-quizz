export class Jersey {

    constructor(
        id: number,
        team: string,
        season: number,
        pictureUrl: string
    ) {
        this.id = id;
        this.team = team;
        this.season = season;
        this.pictureUrl = pictureUrl;
    }

    id: number;
    team: string;
    season: number;
    pictureUrl: string;
}
