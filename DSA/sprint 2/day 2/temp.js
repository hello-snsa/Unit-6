
function findSubarraySum(arr, n, sum) {


    let res = 0;
    let prevSum = new Map();
    let currsum = 0;


    for (let i = 0; i < n; i += 1) {

        currsum = currsum + arr[i];
        if (currsum === sum) {

            res += 1;
        }

        if (prevSum.has(currsum - sum)) {

            res += prevSum.get(currsum - sum);
        }

        let count = prevSum.get(currsum);
        if (count === null) {
            prevSum.set(currsum, 1);
        }
        else {
            prevSum.set(currsum, count + 1);
        }
    }
    return res;
}

// let arr = [10, 2, -2, -20, 10];
let arr = [1, 2, 1, 3];
let sum = 5;
let n = arr.length;
let ans = findSubarraySum(arr, n, sum);
if (ans > 0)
    console.log("Yes");
else
    console.log("No");


