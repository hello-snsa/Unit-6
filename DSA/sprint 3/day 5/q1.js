function runProgram(input) {

    input = input.trim();
    let newInput = input.split(/[\r\n]+/);


    let len = Number(newInput[0]);
    let arr = newInput[1].split(" ").map(Number);

    arr.sort((a, b) => { return (a - b) })
    
    let Q = Number(newInput[2]);


    for (let a = 3; a < Q + 3; a++) {


        let data = newInput[a].split(" ").map(Number);
        let query = Number(data[0]);
        let num = Number(data[1]);

        let count = 0;

        if (query == 0) {

            for (let i = 0; i < len; i++) {
                if (num <= arr[i]) {
                    count = len - i;
                    break;
                }
            }
        }
        else {
            for (let i = 0; i < len; i++) {
                if (num < arr[i]) {
                    count = len - i;
                    break;
                }
            }

        }

        console.log(count);



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