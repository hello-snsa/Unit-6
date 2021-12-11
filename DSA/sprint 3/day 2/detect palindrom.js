
let str = 'aabbcc'.split("");
// let str = 'aabcd'.split("");

str.sort();
let count = 1;
let flag = 0;
let temp = str[0];
for (let i = 1; i <= str.length; i++) {

    if (str[i] == temp) {
        count++;
    }

    if (str[i] != temp) {

        if (count % 2 != 0) {
            // console.log("c", count)
            flag++;

        }
        count = 1;
    }

    temp = str[i];

}

if (flag > 1)
    console.log("Not Possible!");
else
    console.log("Possible!")