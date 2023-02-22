const ShoppingBasket = require("./shoppingBasket");

describe("Shopping Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new ShoppingBasket();
  });

  it("returns 0 for empty basket", () => {
    expect(basket.getTotalPrice()).toBe(0);
  });
  
  it("Adds an item to the array", () => {
    const marsdouble = { getName: () => "Mars", getPrice: () => 3.99 };
    basket.addItem(marsdouble);
  });
});
