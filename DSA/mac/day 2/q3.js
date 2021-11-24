

function lowerIndex(arr, n, x) {

    let l = 0, h = n - 1;
    while (l <= h) {
        let mid = parseInt((l + h) / 2, 10);
        if (arr[mid] >= x)
            h = mid - 1;
        else
            l = mid + 1;
    }
    return l;
}


function upperIndex(arr, n, y) {
    let l = 0, h = n - 1;
    while (l <= h) {
        let mid = parseInt((l + h) / 2, 10);
        if (arr[mid] <= y)
            l = mid + 1;
        else
            h = mid - 1;
    }
    return h;
}


function countInRange(arr, n, x, y) {

    let count = 0;
    count = upperIndex(arr, n, y) -
        lowerIndex(arr, n, x) + 1;
    return count;
}

let arr = [1, 4, 4, 9, 10, 3];
let n = arr.length;


arr.sort(function (a, b) { return a - b });


let i = 1, j = 4;
console.log(countInRange(arr, n, i, j));;

i = 9;
j = 12;
console.log(countInRange(arr, n, i, j));


