function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        var n = data[0];
        var m = data[1];
        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", data,arr);
        let count = 0;

        const fun = (arr, n, m) => {
            let start = 0, end = 0, count = 0, sum = arr[0];

            while (start < n && end < n) {

                if (sum < m) {
                    end += 1;

                    if (end >= start)
                        count = count + (end - start);

                    if (end < n)
                        sum = sum + arr[end];
                }

                else {
                    sum = sum - arr[start];
                    start += 1;
                }
            }

            return count;
        }


        let ans = fun(arr, n, m);
        console.log(ans);











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