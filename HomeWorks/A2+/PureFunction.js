function deleteFirstLastGap(input) {
    var newString = JSON.parse(JSON.stringify(input));
    while (newString.charAt(0) == ' ') {
        newString = newString.substr(1);
    }
    while (newString.charAt(newString.length - 1) == ' ') {
        newString = newString.substr(0, newString.length - 1);
    }
    return newString;
}

//второй вариант функции:
function deleteFirstLastGap2(input) {
    var newString = JSON.parse(JSON.stringify(input));
    var from = 0;
    while (newString.charAt(from) == ' ') from++;
    var to = newString.length - 1;
    while (newString.charAt(to) == ' ') to--;
    newString = newString.substr(from, to + 1);
    return newString;
}
