/*LAB 2
Find the length of the numbers in array A that are divisible by 2 or 3 and greater than 15.
For example…
divisible(A)
divisible([2,3,12,18,42,24]) to return 3
divisible([100,84,22,37]) to return 1
divisible([5,8,6,12]) to return 0 */
function divisible(array){
    var resultArray = [];
    for(var i =0; i < array.length; i++){
        if (array[i] > 15 && array[i] % 2 == 0 && array[i] % 3 == 0) {
            resultArray.push(array[i])
        }
    }
    return resultArray.length;
}
console.log(divisible([2,3,12,18,42,24])) 
console.log(divisible([100,84,22,37]))
console.log(divisible([5,8,6,12]))