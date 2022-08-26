import {PadCommand} from "./PadCommand";
import {DrinkMaker} from "../interfaces/DrinkMaker";
import {DrinkType} from "./DrinkType";
import {Sugar} from "./Sugar";
import {TooManySugarsException} from "./CustomException";
import {DrinkTranslator} from "./DrinkTranslator";
import {MessageHandler} from "./MessageHandler";

export class Logic {

    constructor(
        private readonly drinkMaker: DrinkMaker,
        private readonly drinkTranslator: DrinkTranslator,
        private readonly messageHandler: MessageHandler) {
    }

    constructInstruction(padCommand: PadCommand): string {
        this.messageHandler.sendMessageWhenNotEnoughMoney(padCommand);

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

    convertSugarNumber(sugar: Sugar): string {
        return this.drinkTranslator.translateSugar(sugar);

    }

    sendingInstruction(instruction: string) {
        return this.drinkMaker.processInstruction(instruction);
    }

    communicateDrinkMakerInstructionFromPadCommand(padCommand: PadCommand) {
        return this.sendingInstruction(this.constructInstruction(padCommand));
    }

    //to do class Verification
}