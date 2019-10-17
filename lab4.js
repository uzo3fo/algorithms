/* LAB 4
Given an array of objects containing user’s information, assign a default age X for any user that did not enter his/her age and return the array.


checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33) to return ([{ name: "XYZ", age: 23 }, { name: "ABC", age: 33}]


checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55) to return ([{ name: "XYZ", age: 55 }, { name: "ASD", age: 55 }, { name: "CVB", age: 33 }])
*/
function checkAge(array, x){
    for(let obj of array){
        if(obj.hasOwnProperty('age') === false){
            Object.assign(obj, {age: x})
        }
    }
    return array
}

console.log(checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33))
console.log(checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55))