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

// function calcTime(seconds) {
//     let timerMinutes =  Math.floor(seconds / 60)
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds;
// }
// console.log(calcTime(500))

// function getMax(arr) {
//     /* The code below is how you find the biggest number in an ' array ' */
//     let max = arr[0]
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//   return max
// }

// console.log(getMax([1, 2, 3, 5]));

// function reverseString(str) {
//     /* The code below is how you reverse a " string " */
//     let reverse = '';
//     for (let i = 0; i < str.length; ++i) {
//         reverse = str[i] + reverse;
//     }
//   return reverse
// }
//     /* Alternative code  " Decromenting for loop" */

// //     for (let i = str.length - 1; i >= 0; --i) {
// //         reverse += str[i]
// //     }
// //     return reverse;
// // }
// console.log(reverseString('Alhassan'))

/**IMPORTANT
 *   only arrays have a reverse property called " .reverse() ", to reverse a string
 *  you reverse it into an array by coding, " .split('') " in front of your sting.
 * e.g: 'abc'.split('').reverse() and then is should output => ['c', 'b', 'a']
 * YOU THEN RETURN IT INTO A STING; using the " .join('') "
 * current code: 'abc'.split('').reverse().join('')
 * your code should out put => 'cba'
 *
 */

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('abc'))

// function convertToZeros(arr) {
/* This is how you convert every single element of an " array " into a '0' */
// let newArr = [];
// for (let i = 0; i < arr.length; ++i) {
//     newArr[i] = 0
// }
// return newArr;

// /* Alternative code using " .fill() " */
// return new Array (arr.length).fill(0) /* use the arr.length to match the ' array '
// of the Parameter. */

/* Alternative code using " .map() ", '.map()' allows you to map every elemnt in
    an 'array' */
//     return arr.map(elem => 0);/* .map() converts everything inside of an 'array' to the right
//     side of the arrow function " (elem => 0) " */

// }

// console.log(convertToZeros([1, 2, 3]))

// function removeApples(arr) {
//     return arr.filter(elem => elem !=='Apples')

//     /* Alternative code */
//     let notApples = []
//    for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] !== 'Apples') {
//         notApples.push(arr[i])
//     }
//    }
//    return notApples
// }

// console.log(removeApples(['Banana', 'Apples', 'Orange', 'Apples']))

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }
// console.log(filterOutFalsy([[], 0, null, undefined, "0", NaN, '', false, ]))

// /*  Alternative code */
// function filterFalse(arr) {
//     let falsy = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             falsy.push(arr[i])
//         }
//     }
//     return falsy
// }
// console.log(filterFalse(['Tomatoe', 'Orange', 'Banana', false]))

/*  Alternative code */

// function falseValues(num) {
//     return num.filter(elem => elem !== 'Apple')
// }
// console.log(falseValues(['Banana', 'Orange', 'Apple']))

function convertToBoolean(arr) {
//   let bool = [];
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] !== true) {
//       bool.push(!!arr[i]);
//     }
//   }
//   return bool;

  /*  Alternative code */
  return arr.map(elem => !!elem)
}
console.log(convertToBoolean([500, 0, "Alhassan", "", []]));
