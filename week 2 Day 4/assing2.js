function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function generateFibonacci(n) {
    let fibonacciSequence = [0, 1];

    if(!isNumeric(n)) {
        console.log("Error - entered value is not a number");
        return null;
    } else {
        for (let i = 2; i < n; i++) {
            fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        }
        return fibonacciSequence.slice(0, n);
    }
}

console.log(generateFibonacci(5));
