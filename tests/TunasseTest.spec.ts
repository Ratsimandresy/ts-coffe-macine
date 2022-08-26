import {PadCommand} from "../src/classes/PadCommand";
import {DrinkType} from "../src/classes/DrinkType";
import {Tunasse} from "../src/classes/Tunasse";
import {FakeDrinkMaker} from "./CoffeeMachineLogicTest.spec";
import {Logic} from "../src/classes/Logic";

describe('Given an amount of money', () => {

    test('when customer order a coffe with 0.2 euro, it should return 0.4', () => {
        const tunasse = new Tunasse(0.2);
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, tunasse);

        const actual = padCommand.verifyAmount(padCommand.getTunasse().tunasse);

        expect(actual).toEqual(0.4);
    })
    test('when customer order a coffe with 0 euro, it should return 0.6', () => {

        const tunasse = new Tunasse(0);
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, tunasse);

        const actual = padCommand.verifyAmount(padCommand.getTunasse().tunasse);

        expect(actual).toEqual(0.6);
    })

    test('when customer order a coffe with 0.2 euro, it should indicate the amount needed to pay', () => {
        const tunasse = new Tunasse(0.2);
        const padCommand = new PadCommand(DrinkType.COFFEE, 2, tunasse);
        const fakeDrinkMaker = new FakeDrinkMaker('');
        const logic = new Logic(fakeDrinkMaker)

        logic.communicateDrinkMakerInstructionFromPadCommand(padCommand)

        expect(fakeDrinkMaker.instruction).toEqual('M: you need to provide 0.4 extra euro !');
    })
});
