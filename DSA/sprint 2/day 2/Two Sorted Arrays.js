function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr1 = newInput[a + 1].split(" ").map(Number);
        var arr2 = newInput[a + 2].split(" ").map(Number);

        // arr2.sort((a, b) => (a - b));
        // console.log("data", arr1, arr2);

        let count = 0;
        let temp = arr1[0];
        let arr = [temp];

        for (let i = 1; i < arr1.length; i++) {

            if (temp != arr1[i]) {
                arr.push(arr1[i])
            }
            temp = arr1[i];
        }
        console.log(arr)
        // arr1 = arr;


        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr[i] == arr2[j]) {
                    console.log("arr[i,j]", arr[i], arr2[j])
                    count++;
                    break;
                }
                if (arr[i] < arr2[j]) {
                    break;
                }
            }
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