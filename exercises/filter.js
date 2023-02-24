const longerThanFive = (str) => {
  return str.length > 5;
};

const resultArray = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const string = callback(element);
    if (string == true) {
      result.push(element);
    }
  }
  return result;
};

const names = ["John", "Sameera", "Hayley", "Terry", "Marie", "Vaibhav", "Raaya"];
console.log(resultArray(names, longerThanFive));
