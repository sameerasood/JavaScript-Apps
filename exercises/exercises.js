// Look at the README for instructions.

// Exercise 1. Edit this function
const doubleCall = (callback) => {
  callback();
  callback();
};

// Exercise 2. Edit this function
const obnoxiousFn = (callback) => {
  console.log("EXECUTING CALLBACK!");
  return callback();
};

// Exercise 3. Edit this function
const currentTime = (callback) => {
  const time = new Date();
  const timeEl = time.toLocaleTimeString();
  return callback(timeEl);
};

// Bonus Exercise. Edit this function
const myMap = (array, callback) => {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(callback(element));
  }
  return newArray;
};


module.exports = {
  doubleCall,
  obnoxiousFn,
  currentTime,
  myMap,
};
