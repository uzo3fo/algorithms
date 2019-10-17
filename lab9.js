/*LAB 9(*) 
Return all the unique values in an array as another array.
For example;
uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]) will return [1,2,3,4,5,6,7,9]; */
function uniques (array){
    return [...new Set(array)]
}
console.log(uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5])
)