'use strict';
let  phrase = prompt(`Введите фразу...`,'лазер боре хер обрезал');
function isPalindrom(input) {
    let fixPhrase = input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '')
    let fixPhraseReverse = fixPhrase.split('').reverse().join('');

    return fixPhrase === fixPhraseReverse;
}
console.log(isPalindrom(phrase));