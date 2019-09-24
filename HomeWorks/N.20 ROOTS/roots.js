"use strict";
function squareRoots(a, b, c) {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                return Infinity;// бесконечно корней
            } else return null;// нет корней
        } return [-c / b];
    }

    if (b == 0) {
        if (c == 0) return [0];
        if (-c / a < 0) {
            return null;
        } else {
            x1 = Math.sqrt(-c / a);
            x2 = -x1;
            return [x1, x2];// два корня
        }
    }

    if (c == 0) {
        x1 = 0;
        x2 = -b / a;
        return [x1, x2];// два корня
    }
    //если никто не равен нулю
    var d = b * b - 4 * a * c; // дискриминант
    if (d < 0)
        return null; // нет корней
    if (d == 0)
        return [-b / (2 * a)]; // один корень
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2]; // два корня
}
// находим корни квадратного уравнения
function ttt() {
    var a = Number(prompt('Введите a'));
    var b = Number(prompt('Введите b'));
    var c = Number(prompt('Введите c'));
    var roots = squareRoots(a, b, c);
    if (roots === Infinity) return console.info('бесконечность!')
    if (roots === null) return console.info('Корней нет!');
    if (roots.length == 1) return console.info('Один корень: ' + roots[0]);
    if (roots.length == 2) return console.info('Два корня: ' + roots[0] + ' и ' + roots[1]);
    else console.error(` что тут творится?`)
}
function randomDiap() {
    let n = -100;
    let m = 100;
    return ((Math.random() * (m - n + 1)) + n);// степень округления
}

function squareRootsTests() {
    const mistake = 1e-10;
    for (let i = 0; i < 1e3; i++) {
        let a = randomDiap();
        let b = randomDiap();
        let c = randomDiap();
        let roots = squareRoots(a, b, c);
        if (roots === Infinity) console.log(`Бесконечно корней!`);
        else if (roots === null) console.log(`Корней нет`);
        else if (roots.length == 1) {
            let x = +squareRoots(a, b, c)[0];
            let result = a * x * x + b * x + c;
            if (Math.abs(0 - result) < mistake) {
                console.info(`Успешно `)
            } else console.error(`Fail with x1; a = ${a};b = ${b}; c = ${c}`);
        } else if (roots.length == 2) {
            let x = +squareRoots(a, b, c)[1];
            let result = a * x * x + b * x + c;
            if (Math.abs(0 - result) < mistake) {
                console.info(`Успешно`);
            } else console.error(`Fail with x2; a = ${a};b = ${b}; c = ${c}`);
        }
    }
}

