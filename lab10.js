/*LAB 10
Return True or False if a word is a Palindrome 
Hint: a palindrome is a word that can be spelt backwards and looks the same.
Not case sensitive


For example;
isPalindrome(‘madam’) to return true
isPalindrome(‘decagon’) to return false*/

function isPalindrome(str){
    if(str === str.split('').reverse().join('')){
        return true;
    }return false;
}
console.log(isPalindrome('madam'))
console.log(isPalindrome('decagon'))
