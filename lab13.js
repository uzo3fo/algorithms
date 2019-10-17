/*
LAB 12
You are given an array of player objects for a competition of several games.
let register = [
        {name: ‘Tolu’, age: 54, game:’Chess’},
        {name: ‘Ikenna’, age: 19, game:’Catch’},
        {name: ‘Adammu’, age: 78, game:’FuzzBuzz’},
{name: ‘David’, age: 23, game:’Chess’}
]


Write a function that:
Extract all the names of the players from the given array of user objects and return an array of names
For example;
playerNames(register) to return [‘Tolu’, ‘Ikenna’,’Adammu’,’David’]
*/
let register = [
    {name: 'Tolu', age: 54, game:'Chess'},
    {name: 'Ikenna', age: 19, game:'Catch'},
    {name: 'Adammu', age: 78, game:'FuzzBuzz'},
    {name: 'David', age: 23, game:'Chess'}
]

function playerNames(register){
    return register.filter(item => item.game === 'Chess').map(item => item.name)
}
console.log(playerNames(register));