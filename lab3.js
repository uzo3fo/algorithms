//LAB 3
//Find the total age of the applicants that applied for this interview from the given record below.For example…


/*totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]) to return 63
totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]) to return 96
totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 },  { name: "AZX", age: 22 }]) to return 132*/
function totalAge(array){
    const sum = array.map(element => element.age).reduce((a, b) => a + b, 0);
    return sum;
}
console.log(totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]))
console.log(totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]))
console.log(totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 },  { name: "AZX", age: 22 }]))
