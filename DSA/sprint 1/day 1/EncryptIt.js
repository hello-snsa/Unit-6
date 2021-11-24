function runProgram(input) {
    input = input.trim();

    let newInput = input.split(/[\r\n]+/);

    let str = newInput[0];
    let k = Number(newInput[1]);
    let kk = k;

    if (k >= 26) {
        let n = Math.floor(k / 26);
        k = k - (26 * n);

    }
    if (kk >= 10) {
        let n = Math.floor(kk / 10);
        kk = kk - (10 * n);

    }
    let data = [];
    const fun = () => {

        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
                let newNum = str.charCodeAt(i) + kk;
                if (newNum > 57) {
                    newNum = newNum - 10;
                }
                data.push(newNum);
            }
            else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                let newNum = str.charCodeAt(i) + k;
                if (newNum > 90) {
                    newNum = newNum - 26;
                }
                data.push(newNum);
            }

            else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                let newNum = str.charCodeAt(i) + k;
                if (newNum > 122) {
                    newNum = newNum - 26;
                }
                data.push(newNum);
            }

            else {
                data.push(str.charCodeAt(i))
            }

        }
        // console.log("data  is ", data)


        let result = "";
        for (let i = 0; i < data.length; i++) {

            result += String.fromCharCode(data[i]);

        }
        return result;

    }

    let res = fun()
    console.log(res)



} //End of runProgram()

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
}); //End of program