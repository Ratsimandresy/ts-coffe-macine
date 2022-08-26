import {PadCommand} from "../src/classes/PadCommand";
import {DrinkType} from "../src/classes/DrinkType";
import {Logic} from "../src/classes/Logic";
import {FakeDrinkMaker} from "./CoffeeMachineLogicTest.spec";
import {DrinkTranslator} from "../src/classes/DrinkTranslator";
import {MessageHandler} from "../src/classes/MessageHandler";

describe('Given a pad instruction', () => {

    const drinkTranslator = new DrinkTranslator();
    const fakeDrinkMaker = new FakeDrinkMaker("");
    const messageHandler = new MessageHandler();
    const logic = new Logic(fakeDrinkMaker, drinkTranslator, messageHandler);

    test('Logic should send the instruction to make 1 chocolate with no suger and no stick', () => {
        const padCommand = new PadCommand(DrinkType.CHOCOLATE, 0, 0.6);

        const instruction = logic.constructInstruction(padCommand);

        expect(instruction).toEqual('H::');
    })

    test('Logic should send the instruction to make tea with one sugar and a stick', () => {
        const padCommand = new PadCommand(DrinkType.TEA, 1, 0.4);

        const instruction = logic.constructInstruction(padCommand);

        expect(instruction).toEqual('T:1:0')
    })

    test('Logic should send the instruction to make coffee with two sugars and a stick', () => {
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, 0.6);

        const instruction = logic.constructInstruction(padCommand);

        expect(instruction).toEqual('C:2:0');
    })

    test('Logic should send appropriate instruction for too many sugars', () => {
        const padCommand = new PadCommand(DrinkType.COFFEE, 4, 0.6);

        const instruction = logic.constructInstruction(padCommand);

        expect(instruction).toEqual('M: You can\'t add more than two sugars !');
    })

    test('Logic should send instruction to drink maker', () => {
        const instruction = "C:2:0";
        logic.sendingInstruction(instruction)

        expect(fakeDrinkMaker.instruction).toEqual(instruction);
    })
});