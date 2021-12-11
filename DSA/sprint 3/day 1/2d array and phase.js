function runProgram(input) {
    let newInput = input.split(/[\r\n]+/);
    let dim = newInput[0].split(" ").map(Number);
    let rows = Number(dim[0]);
    let cols = Number(dim[1]);

    let count = 0;
    let mat = [];

    for (let a = 1; a <= rows; a++) {
        mat.push(newInput[a].split(""));
    }


    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < cols - 3; j++) {
            if (mat[i][j] === "s") {

                if (
                    mat[i][j + 1] === "a" &&
                    mat[i][j + 2] === "b" &&
                    mat[i][j + 3] === "a"
                ) {
                    count++;
                }
            }
        }

    }

    for (let j = 0; j < rows - 3; j++) {
        for (let i = 0; i < cols; i++) {

            if (mat[j][i] === "s") {

                if (
                    mat[j + 1][i] === "a" &&
                    mat[j + 2][i] === "b" &&
                    mat[j + 3][i] === "a"
                ) {
                    count++;
                }
            }
        }


    }
    for (let i = 0; i < rows - 3; i++) {
        for (let j = 0; j < cols - 3; j++) {

            if (mat[i][j] === "s") {
                if (
                    mat[(i + 1)][(j + 1)] === "a" &&
                    mat[(i + 2)][(j + 2)] === "b" &&
                    mat[(i + 3)][(j + 3)] === "a"
                ) {
                    count++;
                }
            }



        }
    }


    for (let i = rows - 1; i > 2; i--) {
        for (let j = 0; j < cols - 3; j++) {
            if (mat[i][j] === "s") {

                if (
                    mat[i - 1][j + 1] === "a" &&
                    mat[i - 2][j + 2] === "b" &&
                    mat[i - 3][j + 3] === "a"
                ) {
                    count++;

                }
            }
        }

    }
    console.log(count);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});