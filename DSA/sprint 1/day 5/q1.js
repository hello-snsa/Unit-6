function runProgram(input) {

    input = input.trim();
    var n = Number(input);//.split("\n");

    let a = 0;
    let b = 1;
    let c = 1;

    for (let i = 1; i <= n - 2; i++) {
        a = b; b = c; c = a + b;
    }
    console.log(c)

    // console.log(data, len, k, arr)



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


