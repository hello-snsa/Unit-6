let arr = "1 1 1 1 1".split(" ").map(Number);
// console.log(arr)


let N = arr.length;
let max = 0;


for (let i = 0; i < arr.length; i++) {

    let j = N - 1;
    while (j > i) {

        if (arr[i] == arr[j]) {
            if ((j - i) > max) {
                max = j - i;
            };
            break
        }

        j--;
    }
}

console.log(max)