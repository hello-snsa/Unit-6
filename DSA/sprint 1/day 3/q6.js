function runProgram(input) {

    input = input.trim();
    let newInput = input.split(/[\r\n]+/);

    let noOfQuery = Number(newInput[0]);

    for (let a = 1; a <= noOfQuery * 2; a += 2) {
        let data = newInput[a].split(" ").map(Number);
        let arr = newInput[a + 1].split(" ").map(Number);

        arr.sort((a, b) => (a - b));

        let k = data[1];
        let len = data[0];
        let I = 0;
        let res = -1;
        let index;
        let count = -1;



        const fun = (i, l) => {


            if (l >= i) {
                let mid = Math.floor((i + l) / 2);
                index = mid;

                if (arr[mid] + arr[I] == k) {
                    res = 1;
                    index = mid;
                    count = 1;
                    return;
                }
                else if (arr[mid] > k) {
                    return fun(i, mid - 1);
                }
                else {
                    return fun(mid + 1, l)
                }
            }

        }
        while (I < len) {

            let i = I + 1;
            fun(i, len);
            I++;
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