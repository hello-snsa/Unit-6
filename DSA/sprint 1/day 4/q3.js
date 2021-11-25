function runProgram(input) {
    input = input.trim();

    let str = input.split("");

    let arr = [];

    for (let a = 0; a < str.length; a++) {

        if (str[a] === '[' || str[a] === ']' || str[a] === '{' || str[a] === '}' || str[a] === '(' || str[a] === ')') {

            arr.push(str[a])
        }
    }
    let left = 0;
    let last = arr.length - 1;
    let right = arr.length - 1;
    let isBalanced = true;
    let data = [];


    if ((arr[0] === ')' || arr[0] === ']' || arr[0] === '}') || (arr[last] === '(' || arr[last] === '[' || arr[last] === '{') || (last + 1) % 2 != 0) {
        console.log("unbalanced");

    }

    else {

        while (left <= right) {
            if (arr[left] === '{' || arr[left] === '[' || arr[left] === '(') {

                data.push(arr[left]);
            }
            else if (arr[left] === '}' || arr[left] === ']' || arr[left] === ')') {

                let temp = data.pop();

                let check = checkIt(arr[left], temp)


                if (check === false) {

                    isBalanced = false;
                    break;
                }

            }
            left++;

            function checkIt(b, a) {
                if ((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) {
                    return true;
                }
                else { return false };

            }


        }

        if (isBalanced && data.length === 0)
            console.log("balanced")
        else {
            console.log('unbalanced');
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
});//En d of program