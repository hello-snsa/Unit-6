let arr = [1, 2, 3, 3, 4];

let temp = 0

let extra = -1;
let missing = -1;

for (let i = 0, j = 0; i < arr.length; i++) {
    // if(arr[i]!=i){
    //     missing
    // }
    if (arr[i] == temp) {
        console.log(arr[i], temp)
        extra = arr[i];
        j++;
    } else {

        temp++;
    }


    if (arr[j] != (j + 1)) {
        // console.log("j", arr[j], j + 1)
        missing = j
    }
    j++;
}

console.log(missing, extra)
