// Write a recursive function that calculates the factorial of a number.

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

// Write a function to return a position in the Fibonacci sequence.

function fibonacci(n, previousTwoNumbersInSequence = [0, 1]) {
    if (n === 0) {
        return previousTwoNumbersInSequence[0];
    }
    const total = previousTwoNumbersInSequence[0] + previousTwoNumbersInSequence[1];
    return fibonacci(n - 1, [previousTwoNumbersInSequence[1], total]);
}