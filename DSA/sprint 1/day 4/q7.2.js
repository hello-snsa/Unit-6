const { Console } = require("console");

function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var str = newInput[a + 1].split("");

        str.sort();
        let obj = {};
        // console.log("data", str);
        let temp = str[0];
        let odd = 0;
        //a a abbcc

        let count = 0;
        for (let i = 0; i < str.length; i++) {
            // console.log("CHECK", str)
            // console.log("CHECK", str[i])
            if (obj[str[i]] != undefined) {
                obj[str[i]]++;


                // console.log("inside if",str[i],temp)
                // count++;
            }
            else {
                obj[str[i]] = 1;

                // console.log("inside else",str[i],temp,count)

                //     if (count % 2 != 0 || count == 0) {
                //         // console.log("inside if else",str[i],temp)
                //         odd++;
                //     }
                //     count = 01;

                // }
                // if (temp != str[i]) {
                //     temp = str[i];
                // }
            }
        }

        let key = Object.keys(obj);
        for (let i = 0; i < key.length; i++) {
            if (obj[key[i]] % 2 != 0)
                count++;
        }

        // console.log("odd", odd);

        if (count > 1) {
            console.log('Not Possible!')

        }
        else {

            console.log('Possible!');
        }



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