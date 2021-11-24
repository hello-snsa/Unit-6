
var NO_OF_CHARS = 256;

function areAnagram(str1, str2) {

    let count = [NO_OF_CHARS];
    let i;


    for (i = 0; i < str1.length && i < str2.length;
        i++) {
        count[str1.charAt(i)]++;
        count[str2.charAt(i)]--;
    }

    if (str1.length != str2.length)
        return false;

    for (i = 0; i < NO_OF_CHARS; i++)
        if (count[i] != 0)
            return false;
    return true;
}

function findAllAnagrams(arr, n) {
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (areAnagram(arr[i], arr[j]))
                console.log(arr[i] +
                    " is anagram of " + arr[j]);
}


function main() {
    let arr = ["geeksquiz", "geeksforgeeks",
        "abcd", "forgeeksgeeks",
        "zuiqkeegs"];
    let n = arr.length;
    findAllAnagrams(arr, n);
}

main();