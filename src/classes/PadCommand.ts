import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";
import { Tunasse } from "./Tunasse";

export class PadCommand {
    private readonly drink: DrinkType;
    private readonly sugar: Sugar;
    private readonly _tunasse: Tunasse;

    constructor(drink: DrinkType, numberOfSugar: number, tunasse: number) {
        this.drink = drink;
        this.sugar = new Sugar(numberOfSugar);
        this._tunasse =  new Tunasse(tunasse);
    }

    getDrink(): DrinkType {
        return this.drink.valueOf();
    }

    getSugar(): Sugar {
        return this.sugar;
    }

    displayTunasseProvided(): number {
        return this._tunasse.displayValue();
    }

    verifyAmount(tunasse: number) : number {
        return (Math.round((this.getDrink().valueOf() - tunasse)*100)/100);
    }
}