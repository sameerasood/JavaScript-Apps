const fizzbuzz = (number) => {
    if (number % 5 === 0 && number % 3 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}
module.exports = fizzbuzz;

console.log(fizzbuzz(15));