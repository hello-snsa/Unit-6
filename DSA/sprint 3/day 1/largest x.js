// let arr = [2, -3, 1, -1, -2, 3]
let arr = [-3, 2, -4, 4, -2]

let n = arr.length;

let max = arr[0];
let min = arr[0];

arr.sort((a, b) => (a - b));

// console.log(arr)
let isBreak = false;

var ans = -1;
for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {

        // console.log(arr[i], arr[j])

        if (arr[i] + arr[j] == 0) {
            // console.log(arr[i], arr[j])
            ans = arr[i]
            isBreak = true;
            break;
        }

    }
    if (isBreak) break
}
console.log(ans)
/*
fun(0,n-1)
function fun(i,j){

    if(arr[i]+arr[j]==0)
    {
        ans1=arr[j];
    }

}


function maxmin(){
    for(let i=0;i<n;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i]
        }
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }

    // if(mi)
}

*/