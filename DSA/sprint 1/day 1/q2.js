
const funSq = (n) => {
    var squareSum = 0;
    while (n != 0) {
        squareSum = squareSum + ((n % 10) * (n % 10));
        n = parseInt(n / 10);
    }
    return squareSum;
}


const isBeautiful = (n) => {
    var slow, fast;

    slow = fast = n;
    do {

        slow = funSq(slow);

        fast = funSq(funSq(fast));

    }
    while (slow !== fast);

    return (slow === 1);
}


let L = 41;
let R = 18467;
let ans = 0;
for (let i = L; i <= R; i++) {

    if (isBeautiful(i))

        ans += i;
}
console.log(ans);





