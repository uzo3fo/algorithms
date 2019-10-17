/*LAB 5
Find the sum of all the ages in an array of objects
For example;
[
                {name: ‘Uche Egbo’, age: 24, occupation: ‘Trader’},
                {name: ‘Solomon Ogbodo’, age: 30, occupation: ‘Accountant’}
]
 
to return 54. */
function sumOfAges(array){
    const sum = array.map(element => element.age).reduce((a, b) => a + b, 0);
    return sum;
}
console.log(sumOfAges([
    {name: 'Uche Egbo', age: 24, occupation: 'Trader'},
    {name: 'Solomon Ogbodo', age: 30, occupation: 'Accountant'}
]))