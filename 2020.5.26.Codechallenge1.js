/*Actual test:
Write a function to remove even numbers from the given array and returns the resulting array.
[execution time limit] 4 seconds (js)
[input] array.integer numbers
  Array of numbers
[output] array.integer
  Array without even numbers
*/

//line 11 is the given text.  Everything below is my attempt I ran out of time as I found out I needed to filter out the new null values from delete & that I needed to actually have an output array.
// function removeEvens(numbers) { 
//     for ( i = numbers.length ; i >=0; i--) {
//         if (numbers[i]%2== 0){
//             numbers.splice(i, 1);
//         }
//     } ;
//     console.log(numbers);
//     return numbers;
// }
//solution 2. run loop forward, decrease index when you splice something
function removeEvens(numbers) { 
    for ( i = 0 ; i , numbers.length; i++) {
        if (numbers[i]%2== 0){
            numbers.splice(i, 1);
            i-1;
        }
    } ;
    console.log(numbers);
    return numbers;
}






//josh runningn tests: 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 12, 14, 15, 16, 1, 1, 1, 17, 18, 19, 20];
removeEvens(numbers)