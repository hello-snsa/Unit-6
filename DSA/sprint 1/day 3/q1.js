function runProgram(input) {
    let newInput = input.split(/[\r\n]+/);

    let len = Number(newInput[0]);
    let str = newInput[1];

    let obj = {};

    for (let i = 0; i < len; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    let arr = [];
    let key = Object.keys(obj);

    for (let k = 0; k < key.length; k++) {
        arr[k] = key[k] + "-" + obj[key[k]];
    }
    console.log(arr.sort().join("\n"));
} //End of runProgram()

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
}); //End of program