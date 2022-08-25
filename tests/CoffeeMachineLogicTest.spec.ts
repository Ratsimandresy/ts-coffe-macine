import {PadCommand} from "../src/classes/PadCommand";
import {DrinkType} from "../src/classes/DrinkType";
import {Logic} from "../src/classes/Logic";
import {DrinkMaker} from "../src/interfaces/DrinkMaker";

export class FakeDrinkMaker implements DrinkMaker{

    receiveHotChocolateNoSugar(instructions: string): boolean {
        return instructions === 'H::'
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

    /*
    test('Logic should send the instruction to make 1 tea with 1 sugar and a stick ', () => {

        let padCommand = ;
        expect(logic.constructInstruction(padCommand)).toEqual("T:1:0")

    })*/

});