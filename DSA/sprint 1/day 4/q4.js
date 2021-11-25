function runProgram(input) {
    input = input.trim();
    let newInput = input.split(/[\r\n]+/);

    let noOfQuiery = Number(newInput[0]);

    for (let a = 1; a < noOfQuiery * 2; a += 2) {



        let result = "";
        let arr = newInput[a + 1].split(" ").map(Number);


        for (let i = 0; i < arr.length - 1; i++) {
            let isAvailable = true;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    result += arr[j] + " ";
                    isAvailable = false;
                    break;
                }

            }
            if (isAvailable) {
                result += -1 + " ";
            }
        }
        result += -1;
        console.log(result);




    }//end of Quiery

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