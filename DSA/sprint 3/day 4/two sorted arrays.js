function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 3; a += 3) {


        var N = Number(newInput[a]);
        var arr1 = newInput[a + 1].split(" ").map(Number);
        var arr2 = newInput[a + 2].split(" ").map(Number);

        let count = 0;

        fun();
        function fun() {
            let isbreak = false
            for (let i = 0; i <= N; i++) {

                for (let j = 0; j < N; j++) {

                    if (arr1[i] == arr2[j]) {
                        count++;
                        arr2[j] = -1;
                        isbreak = true;
                        i++

                    }
                }
                if (isbreak) {
                    // break;
                }
            }
        }


        console.log(count)
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