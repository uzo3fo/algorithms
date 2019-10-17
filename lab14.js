/*LAB 14
You are given a string of numbers and characters separated by commas (,).
For example: ‘2,g,65,e,3,7,5,g,3’
Find the total sum of the numbers in the given string


For example:
sumNumbers(‘2,g,65,e,3,7,5,g,3’) => 85 */

function sumNumbers(string){
     let result;
     string = string.split(',').join();
     let regex = /[a-z]/ig;
      result = string.replace(regex, '').split(',');

   return result.filter(item => item != '').map(element => parseInt(element)).reduce((a,b)=> a+b, 0)
    }
    

console.log(sumNumbers('2,g,65,e,3,7,5,g,3'));