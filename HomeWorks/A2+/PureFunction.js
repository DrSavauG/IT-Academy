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
