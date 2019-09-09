'use strict';

function isPalindromRec(input) {
    if (input.length < 2) return true;
    let fixPhrase = input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '');
    if (fixPhrase[0] === fixPhrase[fixPhrase.length - 1]) {
        return isPalindromRec(fixPhrase.substring(1,fixPhrase.length - 1));
    }return false;
}

let phrase = prompt(`Введите фразу...`, 'А за работу дадут? – Оба раза!');
console.log(isPalindromRec(phrase));