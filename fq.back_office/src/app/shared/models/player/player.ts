export class Player {

    constructor(
        firstName: string,
        lastName: string,
        acceptableAnswers: string[],
        pictureUrl: string,
        id?: number,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.acceptableAnswers = acceptableAnswers;
        this.pictureUrl = pictureUrl;
    }

    id?: number;
    firstName: string;
    lastName: string;
    acceptableAnswers: string[];
    pictureUrl: string;
    placeHolderImgUrl: string = "/assets/placeholder-pictures/player.png";
}
