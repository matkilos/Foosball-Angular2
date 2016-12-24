export class Player {
    public id: string;
    public name: string;

    constructor(init?: Partial<Player>) {
        Object.assign(this, init);
    }
}