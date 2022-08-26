import {DrinkType} from "./DrinkType";

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
        }
    }

}