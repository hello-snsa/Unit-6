
function fun(arr, n, m) {
    let start = 0, end = 0, count = 0, sum = arr[0];

    while (start < n && end < n) {

        if (sum < m) {
            end += 1;

            if (end >= start)
                count = count + (end - start);

            if (end < n)
                sum = sum + arr[end];
        }

        else {
            sum = sum - arr[start];
            start += 1;
        }
    }

    return count;
}

let array = [1, 11, 2, 3, 15];
let m = 10;
let size = array.length;
let count = countSubarray(array, size, m);
console.log(count);


