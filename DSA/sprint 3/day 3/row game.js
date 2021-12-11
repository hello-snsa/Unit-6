function runProgram(input) {

    input = input.split("\n");

    for (let t = 1; t < input.length; t++) {

        let [n, m] = input[t].split(" ").map(Number);

        let mat = input.slice(t + 1, t + n + 1).map(function (row) {
            return row.trim().split(" ").map(Number);
        });

        let obj = {};
        for (let row = 0; row < n; row++) {
            let obj2 = {};
            for (let col = 0; col < m; col++) {
                if (mat[row][col] in obj2) {
                    obj2[mat[row][col]]++
                }
                else {
                    obj2[mat[row][col]] = 1;
                }
            }

            for (key in obj2) {

                if (key in obj) {
                    obj[key]++
                }
                else {
                    obj[key] = 1;
                }
            }
        }

        function fun() {
            let count = 0;

            for (key in obj) {
                if (obj[key] == n) {
                    count++
                }
            }
            return count
        }

        let res = fun();
        console.log(res)
        t = t + n;
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