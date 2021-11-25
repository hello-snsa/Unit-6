function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        // var data = newInput[a].split("");
        var data = newInput[a];
        // let res = '';
        let res = [];

        // console.log("data", data);
        let count = 0;
        // let max = 0;
        // for (let j = 0; j < data.length; j++) {
        //     if (data[j] == '#') {
        //         count++;
        //         if (count > max) {
        //             max = count;
        //         }
        //     } else {
        //         count = 0;
        //     }
        // }
        // console.log(max);

        // if (max != 0) {
        // for (let k = 0; k < data.length; k++) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] == '#') {
                res.pop();
            }
            else {
                res.push(data[i]);
            }
        }
        // console.log("old data", data)
        // data = res;
        // console.log("new data", data)
        // }
        // }

        // else {
        //     for (let i = 0; i < data.length; i++) {
        //         if (data[i + 1] != '#' && data[i] != '#') {
        //             res += data[i];
        //         }
        //     }
        //     data = res;
        //     // console.log(res)
        // }
        console.log(res.join(""))



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