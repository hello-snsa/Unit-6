function runProgram(input) {
    input = input.trim();
    let newInput = input.split(/[\r\n]+/);

    let noOfQuery = Number(newInput[0]);

    for (let a = 1; a < noOfQuery * 2; a += 2) {

        let arr = newInput[a + 1].split(" ").map(Number);
        let n = Number(newInput[a]);

        let stack = [];
        let result = [];

        for (let i = n - 1; i >= 0; i--) {
            if (stack.length > 0) {
                while (arr[i] >= stack[stack.length - 1]) {
                    stack.pop();
                }

                if (stack.length > 0) {
                    result[i] = stack[stack.length - 1]

                }
                else {

                    result[i] = -1;
                }
            }
            else {
                result[i] = -1;
            }
            stack.push(arr[i]);

        }//End of For loop

        console.log(result.join(' '));


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