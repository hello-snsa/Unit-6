
const sumIt = (n) => {
    let temp = 0;

    while (n !== 0) {
        let num = (n % 10);
        temp = temp + (num * num);
        n = Math.floor(n / 10, 10);
    }
    return temp;
}

const isBeautiful = (n) => {

    while (1) {
        if (n === 1) {
            return true;

        }
        n = sumIt(n);
        if (n === 4)
            return false;
    }

}

let L = 41;
let R = 18467;
let ans = 0;
for (let i = L; i <= R; i++) {

    if (isBeautiful(i))

        ans += i;
}
console.log(ans);


