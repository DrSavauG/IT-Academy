'use strict';
let phrase = prompt(`Введите фразу...`, '');
function isPalindrom(input) {
    return input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '') === input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '').split('').reverse().join('');
}
console.log(isPalindrom(phrase));