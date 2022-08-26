export class Sugar {

    constructor(private  readonly numberOfSugar: number) {
    }

    requiresStick() {
        return this.numberOfSugar !== 0;
    }

    hasMoreThanTwoSugars() {
        return this.numberOfSugar > 2;
    }

    toString(): string {
        return this.numberOfSugar.toString();
    }
}