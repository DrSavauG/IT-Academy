'use strict';

function isPalindromRec(input) {
    let fixPhrase = input.replace(/[ёЁ]/g, 'е').toLowerCase().replace(/[^а-щыэ-я]/g, '');
    
    function rec (fixPhrase) {
        if (fixPhrase.length < 2) return true;
        if (fixPhrase[0] === fixPhrase[fixPhrase.length - 1]) {
            return rec (fixPhrase.substring(1, fixPhrase.length - 1));
        } return false;
    }
    return rec (fixPhrase);
}

let phrase = prompt(`Введите фразу...`, 'А за работу дадут? – Оба раза!');
console.log(isPalindromRec(phrase));