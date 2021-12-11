// Print all sub arrays 
let arr = [1, 2, 3, 4, 5];
arr = "3 2 1 5".split(" ").map(Number)

for (let j = 0; j < arr.length; j++) {
    let res = "";
    let sum = 0;
    for (let i = j; i < arr.length; i++) {
        res += arr[i] + " ";
        sum += arr[i];
        console.log(res, "sum=", sum)
    }
}
