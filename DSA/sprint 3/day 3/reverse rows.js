function runProgram(input) {

    let newInput = input.split("\n");
    let rows = newInput[0];

    let mat = newInput.slice(1).map(function (row) {
        return row.split(" ").map(Number);
    });

    let res = fun();

    function fun() {
        let result = "";

        for (let i = 0; i < rows; i++) {

            for (let j = (rows - 1); j >= 0; j--) {
                result += mat[i][j] + " ";
            }
            result += "\n";

        }
        return result
    }

    console.log(res);

}//end of runProgram()



process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});