import {PriceVerification} from "../src/classes/PriceVerification";
import {DrinkType} from "../src/classes/DrinkType";
import {Tunasse} from "../src/classes/Tunasse";

describe("Given_a_drink_order", () => {
    test("Should verify the chocolate price is correct", () => {
        let priceVerification = new PriceVerification();
        let drinkType = DrinkType.CHOCOLATE;
        let tunasse = new Tunasse(0.5);

        expect(priceVerification.verify(drinkType, tunasse)).toEqual(true);
    })
})