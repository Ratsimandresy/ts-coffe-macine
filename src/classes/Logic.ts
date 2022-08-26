import {PadCommand} from "./PadCommand";
import {DrinkMaker} from "../interfaces/DrinkMaker";
import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";
import {TooManySugarsException} from "./CustomException";
import {Tunasse} from "./Tunasse";

export class Logic {
    private _drinkMaker: DrinkMaker;

    constructor(drinkMaker: DrinkMaker) {
        this._drinkMaker = drinkMaker;
    }

    constructInstruction(padCommand: PadCommand): string {
        if (padCommand.getTunasse() != new Tunasse(0)){
            return "M: you need to provide 0.2 extra euro !"
        }
        try {
            return this.convertDrinkType(padCommand.getDrink()) + this.convertSugarNumber(padCommand.getSugar());
        } catch (e) {
            if (e instanceof TooManySugarsException) {
                return "M: You can't add more than two sugars !"
            }
            return "M: Exception not handled.";
        }
    }

    convertDrinkType(drinkType: DrinkType): string {
        switch (drinkType) {
            case DrinkType.CHOCOLATE:
                return "H";
            case DrinkType.TEA:
                return "T";
            case DrinkType.COFFEE:
                return "C";
        }
    }
    convertSugarNumber(sugars: Sugar): string {
        if (sugars.hasMoreThanTwoSugars()) {
            throw new TooManySugarsException("")
        }
        if (sugars.requiresStick()) {
            return ":" + sugars.toString() + ":0";
        }
        return "::";
    }

    sendingInstruction(instruction: string) {
        return this._drinkMaker.processInstruction(instruction);
    }

    communicateDrinkMakerInstructionFromPadCommand(padCommand: PadCommand) {
        return this.sendingInstruction(this.constructInstruction(padCommand));
    }
}