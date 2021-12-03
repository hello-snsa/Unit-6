function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var data = newInput[0].split(" ").map(Number);
    var house = Number(data[0]);
    var tower = Number(data[1]);

    let min = (arr[0] + arr[1]) / 2;

    let range = 0;


    // console.log( k, arr)

    for (let i = 0; i < arr.length - 1; i++) {

        let sum = Math.floor(Math.abs((arr[i] - arr[i + 1]) / 2));
        if (sum < min) {
            min = sum
        }

    }
    console.log(min);



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


