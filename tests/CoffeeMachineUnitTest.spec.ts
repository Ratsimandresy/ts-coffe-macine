import {DrinkType} from "../src/classes/DrinkType";
import {Logic} from "../src/classes/Logic";
import {DrinkMaker} from "../src/interfaces/DrinkMaker";
import {FakeDrinkMaker} from "./CoffeeMachineLogicTest.spec";
import {Sugar} from "../src/classes/Sugar";

describe('Given a drink type',  () => {

    test('should return H for chocolate', () => {
        const drinkType = DrinkType.CHOCOLATE;
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);

        expect(logic.convertDrinkType(drinkType)).toEqual('H')
    })
});

describe('Given a number of sugar', () => {

    test('should return "::" for no sugar', () => {
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);
        let sugars = new Sugar(0);

        expect(logic.convertSugarNumber(sugars)).toEqual('::')

    })
});