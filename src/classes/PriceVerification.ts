import {DrinkType} from "./DrinkType";
import { Tunasse } from "./Tunasse";

export class PriceVerification {

    constructor() {
    }

    verify(drinkType: DrinkType, tunasse: Tunasse) :boolean {
        return drinkType.valueOf() == DrinkType.CHOCOLATE && tunasse.displayValue() === 0.5;
    }
}