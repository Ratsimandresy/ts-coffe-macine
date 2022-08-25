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

    convertDrinkType(drinkType: DrinkType | undefined): string {
        switch (drinkType) {
            case DrinkType.CHOCOLATE:
                return "H";
            case DrinkType.TEA:
                return "T";
            case DrinkType.COFFEE:
                return "C";
            default:
                return "M: drink type is not valid";
        }
    }

    convertSugarNumber(sugars: Sugar): string {
        if (sugars.requiresStick())
            return ":" + sugars.toString() + ":0";
        return "::";
    }
}