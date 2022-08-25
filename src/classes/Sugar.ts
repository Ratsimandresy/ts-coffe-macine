export class Sugar {

    private readonly numberOfSugar : number

    constructor(numberOfSugar: number) {
        this.numberOfSugar = numberOfSugar;
    }

    requiresStick() {
        return this.numberOfSugar !== 0;
    }

    toString() : string{
        return this.numberOfSugar.toString();
    }
}