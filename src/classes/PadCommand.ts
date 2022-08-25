import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";

export class PadCommand {
    private drink: DrinkType;
    private sugar: Sugar;

    constructor(drink: DrinkType, number: number) {
        this.drink = drink;
        this.sugar = number;
    }

    getDrink(): DrinkType {
        return this.drink;
    }

    getSugar(): Sugar {
        return this.sugar;
    }
}