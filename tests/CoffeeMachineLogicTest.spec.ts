import {PadCommand} from "../src/PadCommand";
import {DrinkType} from "../src/DrinkType";
import {Logic} from "../src/Logic";

class FakeDrinkMaker {
    constructor() {
    }

    receiveHotChocolateNoSuger(instructions: string): boolean {
        return instructions === 'H::'
    }
}


describe('Given a pad instruction', () => {

    test('Logic should send the instruction to make 1 chocolate with no suger and no stick', () => {
        const padCommand = new PadCommand(DrinkType.CHOCOLATE, 0);
        const logic = new Logic();
        const fakeDrinkMaker = new FakeDrinkMaker()

        const instruction = logic.constructInstruction(padCommand);

        expect(fakeDrinkMaker.receiveHotChocolateNoSuger(instruction)).toBeTruthy()
    })

    /*
    test('Logic should send the instruction to make 1 tea with 1 sugar and a stick ', () => {

        let padCommand = ;
        expect(logic.constructInstruction(padCommand)).toEqual("T:1:0")

    })*/

});