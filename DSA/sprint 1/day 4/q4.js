function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", arr);


        let res = "";

        for (let i = 0; i < arr.length - 1; i++) {
            let isBreak = false;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    res += arr[j] + " ";
                    isBreak = true;
                    break;
                }
            }
            isBreak ? "" : res += ' -1';
        }
        console.log(res + " -1")


    }//end of Query

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