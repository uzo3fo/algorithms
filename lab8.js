/*LAB 8
Given this string “+7n10 +100 -2n5”
Notation is XnY
X is the box
Y is the weight
 
To get weight of one box you multiply X and Y,
1n50 will be represented as 50 only, no need for the 1.
 
Now find the total weight of boxes.
 
For example “+9n10 -2n10” will return 70 */

function totalWeight(string){
let result;
let re = string.split('').join('');
let regex = /[a-z]/ig;
result = re.replace(regex, '*')
    return eval(result);


}
   

console.log(totalWeight('+9n10 -2n10'))