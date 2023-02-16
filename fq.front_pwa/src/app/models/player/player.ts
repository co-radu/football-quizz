export class Player {

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        acceptableAnswers: string[],
        pictureUrl: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.acceptableAnswers = acceptableAnswers;
        this.pictureUrl = pictureUrl;
    }

    id: number;
    firstName: string;
    lastName: string;
    acceptableAnswers: string[];
    pictureUrl: string;
    placeHolderImgUrl: string = "/assets/placeholder-pictures/player.png";
}
