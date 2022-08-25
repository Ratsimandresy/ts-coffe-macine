import {PadCommand} from "./PadCommand";
import {DrinkMaker} from "../interfaces/DrinkMaker";
import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";

export class Logic {
    private _drinkMaker: DrinkMaker;

    constructor(drinkMaker: DrinkMaker) {
        this._drinkMaker = drinkMaker;
    }

    constructInstruction(padCommand: PadCommand): string {
        return this.convertDrinkType(padCommand.getDrink()) + this.convertSugarNumber(padCommand.getSugar());
    }

    convertDrinkType(drinkType: DrinkType): string {
        return "H";
    }

    convertSugarNumber(sugars: Sugar): string {
        return "::";
    }
}