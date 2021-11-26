function runProgram(input) {

    input = input.trim();
    var n = Number(input);//.split("\n");
    let result = 1;

    function fun(n) {

        if (n == 1) {
            return 1;
        }

        fun(n - 1);
        result = result * n;

    }
    fun(n)

    console.log(result)



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


