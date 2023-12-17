function foo(num) {
    if (typeof num !== 'number') {
        console.log("number required!!!");
        return null;
    }

    let strNum = num.toString();
    let res = strNum[0];

    for (let i = 1; i < strNum.length; i++) {
        let cur = parseInt(strNum[i]);
        let prev = parseInt(strNum[i - 1]);

        if (cur % 2 === 0 && prev % 2 === 0) {
            res += '-' + cur;
        } else {
            res += cur;
        }
    }

    return res;
}

console.log(foo(025468));
