import {DrinkType} from "./DrinkType";
import {Tunasse} from "./Tunasse";
import {drinksPrices} from "./PriceOfDrink";

export class PriceVerification {

    constructor() {
    }

    public verify(drinkType: DrinkType, tunasse: Tunasse): boolean {
        return drinksPrices.has(drinkType) && drinksPrices.get(drinkType) === tunasse.displayValue();
    }
}