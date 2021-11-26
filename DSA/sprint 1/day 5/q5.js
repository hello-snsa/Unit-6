function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var str = newInput[1];
    var n = Number(newInput[0]);



    let res = '';
    const fun = (temp, str, a, b) => {
        if (a <= b + 1 && temp != "") {
            res += temp + "\n";
        }

        for (var i = a; i <= b; i++) {

            fun(temp + str[i], str, i + 1, b);
        }

        return res;
    }
    let ans = fun("", str, 0, n - 1);
    console.log(ans);
}



process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});