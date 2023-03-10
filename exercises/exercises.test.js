const { doubleCall, obnoxiousFn, currentTime, myMap } = require("./exercises");

describe("Exercise 1: doubleCall", () => {
  it("Can be used to say hello twice", () => {
    const mockConsoleLog = jest.fn();

    const sayHello = () => {
      mockConsoleLog("Hello!!");
    };

    doubleCall(sayHello);
    expect(mockConsoleLog).toHaveBeenCalledTimes(2);
  });

  it("Can be used to increment a counter twice", () => {
    let count = 0;

    const increment = () => {
      count++;
    };

    doubleCall(increment);
    expect(count).toEqual(2);
  });
});

describe("Exercise 2: obnoxiousFn", () => {
  it("Shouts before calling the method", () => {
    const mockConsoleLog = jest.fn();
    const mockCallback = jest.fn();
    console.log = mockConsoleLog;
    obnoxiousFn(mockCallback);

    expect(mockConsoleLog).toHaveBeenCalledWith("EXECUTING CALLBACK!");
    expect(mockCallback).toHaveBeenCalled();
  });

  it("Returns the result of the callback", () => {
    const result = obnoxiousFn(() => {
      return 2 + 2;
    });

    expect(result).toEqual(4);
  });
});

describe("Exercise 3: currentTime", () => {
  it("Works with a logging callback", () => {
    Date.prototype.toLocaleTimeString = () => "16:48:07";
    const mockConsoleLog = jest.fn();

    currentTime((time) => {
      mockConsoleLog(`The time is ${time}`);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith("The time is 16:48:07");
  });

  it("Works with a callback updating an external variable", () => {
    Date.prototype.toLocaleTimeString = () => "04:48:07";

    let time;
    currentTime((timeString) => {
      time = timeString;
    });

    expect(time).toEqual("04:48:07");
  });
});

describe("Bonus Exercise: myMap", () => {
  it("Can be used to uppercase strings", () => {
    const lettersArray = ["a", "b", "c"];

    const toUpperCase = (str) => {
      return str.toUpperCase();
    };

    const uppercaseArray = myMap(lettersArray, toUpperCase);
    expect(uppercaseArray).toEqual(["A", "B", "C"]);
  });

  it("Can be used to double numbers", () => {
    const numbersArray = [1, 2, 3, 5];

    const double = (num) => {
      return num * 2;
    };

    const doubledArray = myMap(numbersArray, double);
    expect(doubledArray).toEqual([2, 4, 6, 10]);
  });
});
