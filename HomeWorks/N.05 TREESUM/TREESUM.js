"use strict";
const someObject = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
function treeSum(input) {
    let sumOfInput = 0;
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] == 'object') sumOfInput += treeSum(input[i]);
        else sumOfInput += input[i];
    } return sumOfInput;
};
console.log(treeSum(someObject));