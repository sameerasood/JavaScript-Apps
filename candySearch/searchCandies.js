const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

const searchCandies = (candyName, candyPrice) => {
  let candyArray = [];
  let candyNameUpcase = candyName.charAt(0).toUpperCase();
  candyName = candyNameUpcase + candyName.slice(1);
  candies.map((candy) => {
    if (candy.name.startsWith(candyName) && candy.price <= candyPrice)
      candyArray.push(candy.name);
  });
  return candyArray;
};

module.exports = searchCandies;
