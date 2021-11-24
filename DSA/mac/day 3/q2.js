function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a + 1].split(" ").map(Number);

        // console.log("data", data);

        let arr = [];
        arr[0] = mean(data)
        arr[1] = median(data)
        arr[2] = mode(data)

        console.log(arr.join(" "))

    }//end of Query

}//End of runProgram()

const mean = (data) => {
    const sum = data.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    const noOfData = data.length;
    // mean is simple average of data set
    const mean = sum / noOfData
    // console.log('mean:', mean)
    return Number(Math.floor(mean));
}


const median = (data) => {
    const len = data.length;

    const dataSet = data.sort((a, b) => {
        return a - b;
    });
    let median;
    //   if odd no.of data median is the middle data
    if (len % 2 !== 0) {
        let middle = Math.floor(dataSet.length / 2);
        median = dataSet[middle];
    }
    //   if even no.of data median is the mean of two the middle data
    else {
        let middle1 = len / 2;
        let middle2 = middle1 - 1;
        median = (dataSet[middle1] + dataSet[middle2]) / 2;
    }
    return Number(Math.floor(median));
};


const mode = (data) => {
    let map = {};
    // frequency counter for data array
    for (let i = 0; i < data.length; i++) {
        if (data[i] in map) {
            map[data[i]]++;
        } else {
            map[data[i]] = 1;
        }
    }
    // finding value with max frequency
    let value;
    let max = -1;
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            value = key;
        }
    }
    let mode;
    //   if all data are present only once mode doesn't exist
    if (max === 1) {
        mode = Object.keys(map)[0];
    } else {
        mode = value;
    }
    //   console.log("mode:", mode);
    return Number(mode);
};

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