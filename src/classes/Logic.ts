import {PadCommand} from "./PadCommand";
import {DrinkMaker} from "../interfaces/DrinkMaker";
import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";
import {TooManySugarsException} from "./CustomException";
import {DrinkTranslator} from "./DrinkTranslator";

export class Logic {
    private _drinkMaker: DrinkMaker;

    constructor(drinkMaker: DrinkMaker, private readonly drinkTranslator: DrinkTranslator) {
        this._drinkMaker = drinkMaker;
    }

    constructInstruction(padCommand: PadCommand): string {
        if (padCommand.displayTunasseProvided() < padCommand.getDrink().valueOf()) {
            let difference = padCommand.verifyAmount(padCommand.displayTunasseProvided())
            return `M: you need to provide ${difference} extra euro !`
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
        return this.drinkTranslator.translateDrink(drinkType);
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

    //to do class Verification
}