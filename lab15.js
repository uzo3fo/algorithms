/*LAB 15
Given a two arrays, return the sum of all positive non-zero results when arr1[i] is subtracted from arr2[i].
For example:
totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 11
Explanation: 
2 - 2 = 0
5 - 3 = 2
1 - 5 = -4
0 - 6 = -6
5 - 2 = 3
7 - 1 = 6
Sum   =  2 + 3 + 6 = 11*/

function totalPositiveSum(arr1, arr2){
var resultOfSubtraction =[];
for(var i = 0; i < arr1.length; i++){
    resultOfSubtraction.push(arr1[i] - arr2[i])
    }
    
     return resultOfSubtraction.filter(item => item > 0).reduce((a, b) => a + b, 0)
}
console.log(totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));