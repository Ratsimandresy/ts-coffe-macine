import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";
import {TooManySugarsException} from "./CustomException";

export class DrinkTranslator {

    constructor() {
    }

  public translateDrink(drinkType: DrinkType): string {
       switch (drinkType) {
            case DrinkType.CHOCOLATE:
                return "H";
            case DrinkType.TEA:
                return "T";
            case DrinkType.COFFEE:
                return "C";
            case DrinkType.ORANGE:
                return "O";
        }
    }

    public translateSugar(sugar: Sugar): string {
        if (sugar.hasMoreThanTwoSugars()) {
            throw new TooManySugarsException("")
        }
        if (sugar.requiresStick()) {
            return ":" + sugar.toString() + ":0";
        }
        return "::";
    }
}