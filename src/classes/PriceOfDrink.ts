import {DrinkType} from "./DrinkType";

export const drinksPrices = new Map<DrinkType, number>([
    [DrinkType.CHOCOLATE, 0.5],
    [DrinkType.COFFEE, 0.6],
    [DrinkType.TEA, 0.4],
    [DrinkType.ORANGE, 0.6],
]);