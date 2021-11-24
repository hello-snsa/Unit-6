
function sumDigitSquare(n) {
    let sq = 0;
    while (n != 0) {
        let digit = n % 10;
        sq += digit * digit;
        n = parseInt(n / 10, 10);
    }
    return sq;
}


function isHappy(n) {

    while (true) {


        if (n == 1)
            return true;

        n = sumDigitSquare(n);


        if (n == 4)
            return false;
    }

}

let L = 41;
let R = 18467;
let ans = 0;
for (let i = L; i <= R; i++) {

    if (isHappy(i))

        ans += i;
}
console.log(ans);


