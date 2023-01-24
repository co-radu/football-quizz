export class GameType {

    constructor(id: number, timer: number, label: string) {
        this.id = id;
        this.timer = timer;
        this.label = label;
    }

    id: number;
    timer: number;
    label: string;
}
