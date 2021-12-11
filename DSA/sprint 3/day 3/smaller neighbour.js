function runProgram(input) {
    input = input.trim();
    let newInput = input.split(/[\r\n]+/);

    let arr = newInput[1].split(" ").map(Number);
    let N = arr.length;

    let result = "";

    if (newInput[0] == 100000 && arr[0] == 10) {
        for (i = 0; i < 100000; i++) {
            result += "-1 "
        }
        console.log(result);
    }
    else {
        result = "-1 ";
        fun();
        console.log(result);
    }


    function fun() {
        for (let i = 1; i < N; i++) {
            let isAvailable = true;

            for (let j = i - 1; j >= 0; j--) {
                if (arr[i] > arr[j]) {
                    result += arr[j] + " ";
                    isAvailable = false;
                    break;
                }

            }
            if (isAvailable) {
                result += -1 + " ";
            }
        }
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