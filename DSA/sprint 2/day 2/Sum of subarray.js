function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        var n = data[0];
        var k = data[1];
        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", data,arr);

        const fun = (arr, n, sum) => {
            let res = 0;
            let prevSum = new Map();
            let currsum = 0;

            for (let i = 0; i < n; i += 1) {

                currsum = currsum + arr[i];
                if (currsum == sum) {

                    res += 1;
                }

                if (prevSum.has(currsum - sum)) {

                    res += prevSum.get(currsum - sum);
                }

                let count = prevSum.get(currsum);
                if (count == null) {
                    prevSum.set(currsum, 1);
                }
                else {
                    prevSum.set(currsum, count + 1);
                }
            }

            // console.log("res", res)
            return res;
        }

        let ans = fun(arr, n, k);
        // console.log(ans);
        if (ans > 0)
            console.log("Yes");
        else
            console.log("No");

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