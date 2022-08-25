import {PadCommand} from "../src/classes/PadCommand";
import {DrinkType} from "../src/classes/DrinkType";
import {Logic} from "../src/classes/Logic";
import {DrinkMaker} from "../src/interfaces/DrinkMaker";

export class FakeDrinkMaker implements DrinkMaker{

    receiveHotChocolateNoSugar(instructions: string): boolean {
        return instructions === 'H::'
    }

    receiveTeaOneSugar(instruction: string): boolean {
        return instruction === "T:1:0";
    }
}

describe('Given a pad instruction', () => {

    test('Logic should send the instruction to make 1 chocolate with no suger and no stick', () => {
        const padCommand = new PadCommand(DrinkType.CHOCOLATE, 0);
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);

        const instruction = logic.constructInstruction(padCommand);

        expect(fakeDrinkMaker.receiveHotChocolateNoSugar(instruction)).toBeTruthy()
    })

    test('Logic should send the instruction to make tea with one suger and a stick', () => {
        const padCommand = new PadCommand(DrinkType.TEA, 1);
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);

        const instruction = logic.constructInstruction(padCommand);

        expect(fakeDrinkMaker.receiveTeaOneSugar(instruction)).toBeTruthy()
    })
});