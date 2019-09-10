// B2+
// Написать чистую функцию, эффективно переворачивающую строку задом наперёд.
// Реализация функции не должна использовать циклов и рекурсии.
'use strict';

function doReverse(input) {
     return input.split('').reverse().join('');
}
let entered = prompt(`Введите строку`, '123456789');
console.log(doReverse(entered));