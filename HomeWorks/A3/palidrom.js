'use strict';

function isPalindrom(input) {// с неявным массивом
    let fixPhrase = input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '')
    let fixPhraseReverse = fixPhrase.split('').reverse().join('');
    return fixPhrase === fixPhraseReverse;
}

function isPalindromFor(input) {// через for
    let fixPhrase = input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '')
    for (let index = 0; index < Math.floor(fixPhrase.length / 2); index++) {
        if (fixPhrase[index] !== fixPhrase[fixPhrase.length - index - 1]) {
            return false
        }
    } return true
}
let phrase = prompt(`Введите фразу...`, 'А за работу дадут? – Оба раза!');
console.log(isPalindrom(phrase));
console.log(isPalindromFor(phrase));