function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var query = newInput[3].split(" ").map(Number);

    arr.sort((a, b) => (a - b));
    query.sort((a, b) => (a - b));

    for (let i = 0; i < query.length; i++) {

        let isAvailable = false;


        for (let j = 0; j < arr.length; j++) {
            if (query[i] < arr[j]) {
                break;
            }
            if (query[i] == arr[j]) {
                isAvailable = true;
                break;

            }
        }




        if (isAvailable) {
            console.log("YES")
        }
        else {
            console.log("NO")

        }


    }



    // console.log(data, len, k, arr)



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


