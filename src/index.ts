import {drinksPrices} from "./classes/PriceOfDrink";
import {DrinkType} from "./classes/DrinkType";

for (let key  of drinksPrices) {
    console.log(key)
}

console.log(DrinkType['CHOCOLATE']);
console.log(DrinkType['TEA']);

