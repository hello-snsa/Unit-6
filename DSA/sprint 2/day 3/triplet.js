function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var data = newInput[0].split(" ").map(Number);
    var k = Number(data[1]);

    let count = 0;
    // console.log( k, arr)

    for (let i = 0; i < arr.length; i++) {


        for (let j = 0; j < arr.length; j++) {

            if (j != i && j != i + 1 && j != i - 1) {

                sum = arr[i] - arr[j];
                if (sum <= k)
                    count++;


            }



        }
    }


    //   sum=arr[i+2]-arr[i];

    //   if(sum<=k)
    //   count++;

    //   sum=arr[i-2]-arr[i];
    //   if(sum<=k)
    //   count++;


    // }
    console.log(count);



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


