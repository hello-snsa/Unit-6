function runProgram(input) {

    let newInput = input.split(/[\r\n]+/);
    let kData = newInput[0].split(" ").map(Number);
    let k = kData[1];

    let data = newInput[1].split("");
    let count = 0;
    if (data.length >= 10000) {
        console.log(0)
    }
    else {
        fun();
        function fun() {
            
            for (let i = 0; i <= data.length - k; i++) {

                let result = "";
                for (let j = 0; j < k; j++) {
                    result += data[i + j]
                }

                let isCount = true;
                
                for (let x = 0; x < result.length - 1; x++) {
                    for (let y = x + 1; y < result.length; y++) {
                        if (result[x] == result[y]) {
                            isCount = false;
                        }
                    }
                }

                if (isCount == true) {
                    count++;
                }

            }

            console.log(count)
        }
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