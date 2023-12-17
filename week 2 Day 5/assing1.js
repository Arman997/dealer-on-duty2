function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
    }

    function paths(n) {
    if (n === 1) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
    }

console.log(factorial(1));