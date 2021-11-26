// write a function that takes in two arrays, both arrays are numbers that contain digits. Add both arrays to have an output of another array representing what was being added in array one and array two
// [1, 1] [2, 2] ---> [3, 3]

function addTwo (arrOne, arrTwo) {
    const results = []
    for (let i = 0; i < arrOne.length; i++) {
        results.push(arrOne[i] + arrTwo[i])
    }
console.log(results);
}
addTwo([1, 1], [2, 2])