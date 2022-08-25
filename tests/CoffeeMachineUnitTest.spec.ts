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

    test('should return T for Tea', () => {
        const drinkType = DrinkType.TEA;
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);

        expect(logic.convertDrinkType(drinkType)).toEqual('T')
    })

    test('should return C for Coffee', () => {
        const drinkType = DrinkType.COFFEE;
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);

        expect(logic.convertDrinkType(drinkType)).toEqual('C')
    })

    test('should send a message to the customer when drink is not valid', () => {
        const drinkType = undefined;
        const fakeDrinkMaker = new FakeDrinkMaker();
        const logic = new Logic(fakeDrinkMaker);

        expect(logic.convertDrinkType(drinkType)).toEqual('M: drink type is not valid');
    })
});

describe('Given a number of sugar', () => {

    test('should return "::" for no sugar', () => {
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);
        let sugars = new Sugar(0);

        expect(logic.convertSugarNumber(sugars)).toEqual('::')

    })

    test('should return ":1:0" for one sugar', () => {
        const fakeDrinkMaker: DrinkMaker = new FakeDrinkMaker()
        const logic = new Logic(fakeDrinkMaker);
        let sugars = new Sugar(1);

        expect(logic.convertSugarNumber(sugars)).toEqual(':1:0')

    })
});