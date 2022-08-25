import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";

export class PadCommand {
    private readonly drink: DrinkType;
    private readonly sugar: Sugar;

    constructor(drink: DrinkType, numberOfSugar: number) {
        this.drink = drink;
        this.sugar = new Sugar(numberOfSugar);
    }

    getDrink(): DrinkType {
        return this.drink;
    }

    getSugar(): Sugar {
        return this.sugar;
    }
}