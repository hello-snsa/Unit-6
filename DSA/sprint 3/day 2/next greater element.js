let arr = "1324".split("").map(Number);

let res = "";

for (let i = 0; i < arr.length - 1; i++) {

    let isBreak = false;

    let j = i + 1;
    while (j < arr.length) {


        if (arr[i] < arr[j]) {

            res += arr[j] + " ";
            isBreak = true;
            break;

        }



        j++;
    }
    if (!isBreak) {
        res += "-1 "
    }


}

res += "-1 ";

console.log(res)