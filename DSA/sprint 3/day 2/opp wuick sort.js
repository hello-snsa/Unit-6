function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var n = Number(newInput[0]);

    const quickSort = (arr, l, r) => {
        let index;
        if (n > 1) {
            index = partition(arr, l, r);
            if (l < index - 1) {
                quickSort(arr, l, index - 1);
            }
            if (index < r) {
                quickSort(arr, index, r);
            }
        }
        return arr;
    }


    const partition = (arr, l, r) => {
        let pivot = arr[Math.floor((r + l) / 2)],
            i = l,
            j = r;
        while (i <= j) {
            while (arr[i] < pivot) {
                i += 1;
            }
            while (arr[j] > pivot) {
                j -= 1;
            }
            if (i <= j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                i += 1;
                j -= 1;
            }
        }
        return i;
    }


    quickSort(arr, 0, n - 1);
    let ans = "";
    if (arr.length == 1)
        console.log(arr[0]);
    else {
        for (let i = n - 1; i >= 0; i--) {
            ans += arr[i] + " "
        }
        console.log(ans);
    }




}//End of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = ``;
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});//End of program