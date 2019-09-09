"use strict";

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

    if (colorsCount > colors.length - 1) {
        colorsCount = colors.length - 1;
        console.log(`Цветов не может быть больше ${colors.length - 1}`);
    }
    console.log('цветов: ' + colorsCount);
    let usedColors = {};
    for (let i = 1; i <= colorsCount;) {
        var n = randomDiap(1, colors.length - 1);
        var colorName = colors[n];
        if (colorName in usedColors) {
            continue;
        } else {
            usedColors[colorName] = colorName;
            console.log(colorName);
            i++;
        }
    }
}

mood(7);