import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";
import { Tunasse } from "./Tunasse";

export class PadCommand {
    private readonly drink: DrinkType;
    private readonly sugar: Sugar;
    private readonly tunasse: Tunasse;

    constructor(drink: DrinkType, numberOfSugar: number, tunasse: Tunasse = new Tunasse(0)) {
        this.drink = drink;
        this.sugar = new Sugar(numberOfSugar);
        this.tunasse =  tunasse;
    }

    getDrink(): DrinkType {
        return this.drink;
    }

    getSugar(): Sugar {
        return this.sugar;
    }

    displayTunasseProvided(): number {
        return this.tunasse.displayValue();
    }

    verifyAmount(tunasse: number) : number {
        return (Math.round((this.getDrink().valueOf() - tunasse)*100)/100);
    }
}