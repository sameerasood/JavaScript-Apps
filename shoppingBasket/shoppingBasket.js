require("./candy");

class ShoppingBasket {
  constructor() {
    this.items = [];
  }
  addItem(candy) {
    return this.items.push(candy);
  }
  getTotalPrice() {
    return this.items
      .map((candy) => candy.getPrice())
      .reduce((total, price) => total + price, 0);
  }
}

module.exports = ShoppingBasket;
