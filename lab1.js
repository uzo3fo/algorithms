/*LAB 1
Find the elements in an array Y, that are equal to a given variable X.
For example…
elementsEqualToX(Y, X)
elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a') to return ['a', 'a']
elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3) to return  [3, 3]
elementsEqualToX([4, 6, 2, 6, 7, '7'], '7') to return ['7'] */
function elementsEqualToX(y, x) {
    var filteredArray = [];
    for (let i = 0; i < y.length; i++) {
        if (y[i] === x) {
            filteredArray.push(y[i])
        }
    }
    return filteredArray;
}
    console.log(elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a'))
    console.log(elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3))
    console.log(elementsEqualToX([4, 6, 2, 6, 7, '7'], '7'))