function runProgram(input) {

    let newInput = input.split(/[\r\n]+/);
    let arr = newInput[1].split(" ").map(Number);
    let N = arr.length - 1;


    for (let i = 1; i < N - 1; i++) {

        let F = 0;
        let R = 0;

        for (let j = 0; j <= i - 1; j++) {

            F += arr[j];

        }


        for (let k = N; k > i; k--) {

            R += arr[k];


        }


        if (F == R) {
            console.log(i + 1);
            break;
        }

        if (i == N - 2) {
            console.log("-1");
        }


    }//end of outer loop




}//End of runProgram()
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
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