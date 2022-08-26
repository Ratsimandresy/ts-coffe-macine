import {DrinkType} from "../src/classes/DrinkType";
import {DrinkTranslator} from "../src/classes/DrinkTranslator";

describe('Given a drink', () => {

    const drinTranslator = new DrinkTranslator();

    test('sould return H for chocolate', () => {
        const drinkType = DrinkType.CHOCOLATE;
        expect(drinTranslator.translateDrink(drinkType)).toEqual('H');
    })

    test('sould return C for coffee', () => {
        const drinkType = DrinkType.COFFEE;
        expect(drinTranslator.translateDrink(drinkType)).toEqual('C');
    })

    test('sould return T for Tea', () => {
        const drinkType = DrinkType.TEA;
        expect(drinTranslator.translateDrink(drinkType)).toEqual('T');
    })
});