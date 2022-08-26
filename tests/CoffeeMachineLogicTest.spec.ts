import {PadCommand} from "../src/classes/PadCommand";
import {DrinkType} from "../src/classes/DrinkType";
import {Logic} from "../src/classes/Logic";
import {DrinkMaker} from "../src/interfaces/DrinkMaker";
import {Tunasse} from "../src/classes/Tunasse";

export class FakeDrinkMaker implements DrinkMaker{

    instruction : string;

    constructor(instruction : string) {
        this.instruction = "";
    }

    processInstruction(instruction: string): void {
        this.instruction = instruction;
    }
}

describe('Given a pad instruction', () => {

    const fakeDrinkMaker = new FakeDrinkMaker("")
    const logic = new Logic(fakeDrinkMaker);

    test('Logic should send the instruction to make 1 chocolate with no suger and no stick', () => {
        const padCommand = new PadCommand(DrinkType.CHOCOLATE, 0);

        logic.communicateDrinkMakerInstructionFromPadCommand(padCommand);

        expect(fakeDrinkMaker.instruction).toEqual("H::");
    })

    test('Logic should send the instruction to make tea with one sugar and a stick', () => {
        const padCommand = new PadCommand(DrinkType.TEA, 1);

        logic.communicateDrinkMakerInstructionFromPadCommand(padCommand);

        expect(fakeDrinkMaker.instruction).toEqual("T:1:0");
    })

    test('Logic should send the instruction to make coffee with two sugars and a stick', () => {
        const padCommand = new PadCommand(DrinkType.COFFEE, 2);

        logic.communicateDrinkMakerInstructionFromPadCommand(padCommand);

        expect(fakeDrinkMaker.instruction).toEqual("C:2:0");
    })

    test('Logic should NOT send instruction if not enough money is provided and the message should contains at least the amount of money missing', () => {
        const tunasse = new Tunasse(0.4);
        const padCommand = new PadCommand(DrinkType.COFFEE, 1, tunasse);

        logic.communicateDrinkMakerInstructionFromPadCommand(padCommand);

        expect(fakeDrinkMaker.instruction).toEqual("M: you need to provide 0.2 extra euro !");
    })
});
