import {PadCommand} from "./PadCommand";

export class MessageHandler {

    constructor() {
    }

    sendMessageWhenNotEnoughMoney(padCommand: PadCommand): string {
        const difference = padCommand.verifyAmount(padCommand.displayTunasseProvided());

        if (padCommand.displayTunasseProvided() < padCommand.getDrink().valueOf()) {
            return `M: you need to provide ${difference} extra euro !`
        }
        return "M: Your drink is being prepared.";
    }

}