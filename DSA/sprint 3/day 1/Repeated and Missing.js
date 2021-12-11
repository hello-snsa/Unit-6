function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", data);

        let temp = 0

        let extra = -1;
        let missing = -1;

        for (let i = 0, j = 0; i < arr.length; i++) {
            // if(arr[i]!=i){
            //     missing
            // }
            // console.log("e", arr[i], temp)
            if (arr[i] == temp) {
                // console.log("match", arr[i], temp)
                extra = temp;
                j++;
            } else {

                temp++;
            }


            if (arr[j] != (j + 1)) {
                // console.log("j", arr[j], j + 1)
                missing = j + 1
            }
            j++;
        }

        console.log(missing, extra)

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