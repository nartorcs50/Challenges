
/* YOU MIGHT WANT TO GO BACK ON FRONTEND SIMPLIFIED, TO RESUSCITATE YOUR MEMORY */
// function falsyOrTruthy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2
// }

// console.log(falsyOrTruthy(0, 5))

// function arrLength(arr) {
//     return arr.length
// }

// console.log(arrLength([3, 4, 1, 5]))

// function arrSum(arr) {
//     let sum = 0
//     /* The code below is how you loop through every element in an 'array' */
//     for (let i = 0; i < arr.length; ++i) {        
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(arrSum([1, 2, 3, 4, 5, 6]))


// function progressiveSum(num) {
//     let sum = 0;    
//     for (let i = 1; i <= num; ++i ) {
//         sum = sum + i;
//     }
//     return sum
// }

// console.log(progressiveSum(3))


function calcTime(seconds) {
    let timerMinutes =  Math.floor(seconds / 60)
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(500))
