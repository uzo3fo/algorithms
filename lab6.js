/*LAB 6
Find all the numbers in a string and sum them up
For Example;
expect(‘1weudh56jdnbfskjn788sdhkfbs90’) to return (935) */

function sumUp(string){
    //let str = string;
    let arr = []; 
  for(var i = 0; i < string.length; i++){
      let char = string[i];
      arr.push(parseInt(char))
      result1 = arr.join('').split('NaN');
      
  }
return result1.filter(item => item !== '').map(element => parseInt(element)).reduce((a, b)=> a + b, 0);
}

console.log(sumUp('1weudh56jdnbfskjn788sdhkfbs90'));