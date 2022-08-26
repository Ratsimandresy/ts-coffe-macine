import {PadCommand} from "../src/classes/PadCommand";
import {DrinkType} from "../src/classes/DrinkType";
import {FakeDrinkMaker} from "./CoffeeMachineLogicTest.spec";
import {Logic} from "../src/classes/Logic";
import {DrinkTranslator} from "../src/classes/DrinkTranslator";

describe('Given an amount of money', () => {

    test('when customer order a coffe with 0.2 euro, it should return 0.4', () => {
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, 0.2);

        const actual = padCommand.verifyAmount(padCommand.displayTunasseProvided());

        expect(actual).toEqual(0.4);
    })
    test('when customer order a coffe with 0 euro, it should return 0.6', () => {
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, 0);

        const actual = padCommand.verifyAmount(padCommand.displayTunasseProvided());

        expect(actual).toEqual(0.6);
    })

    test('when customer order a coffe with 0.2 euro, it should indicate the amount needed to pay', () => {
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, 0.2);
        const fakeDrinkMaker = new FakeDrinkMaker('');
        let drinkTranslator = new DrinkTranslator();
        const logic = new Logic(fakeDrinkMaker, drinkTranslator)

        logic.communicateDrinkMakerInstructionFromPadCommand(padCommand)

        expect(fakeDrinkMaker.instruction).toEqual('M: you need to provide 0.4 extra euro !');
    })
});
