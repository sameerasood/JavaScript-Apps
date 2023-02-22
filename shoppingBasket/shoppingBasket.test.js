const ShoppingBasket = require("./shoppingBasket");
const Candy = require("./candy");

describe("Shopping Basket", () => {
  it("adds an item to the basket", () => {
    const candy = new Candy("Mars", 4.99);
    const basket = new ShoppingBasket();
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it("returns the total price of candies", () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy("Skittle", 3.99));
    basket.addItem(new Candy("Skittle", 3.99));
    basket.addItem(new Candy("Mars", 4.99));
    expect(basket.getTotalPrice()).toBe(12.97);
  });
});
