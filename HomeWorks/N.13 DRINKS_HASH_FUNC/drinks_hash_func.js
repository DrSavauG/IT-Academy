'use strict';
// 1
function HashStorageFunc() {
    var storage = {};
    this.addValue = (key, value) => {
        storage[key] = value;
    }
    this.getValue = (key) => {
        return storage[key];
    }
    this.getKeys = () => {
        return Object.keys(storage);
    }
    this.deleteValue = (delKey) => {
        if (delKey in storage) {
            delete storage[delKey];
            return true;
        } else {
            return false;
        }
    }
}
// 2
var drinkStorage = new HashStorageFunc();
// 3
function _sticking() {
    do {
        let i = drinkStorage.getKeys()
        var input = prompt(`Введите название напитка...\n${i == false ? '' : `В наличии:\n   •${i.join('\n   •')}`}`, '');
        if (input === null) {
            console.warn(`Ввод был отменен`);
            return false;
        }
        input = input.trim().toUpperCase();
        if (!input) console.error(`Название напитка не может быть пустым!`);
    } while (!input);
    return input
}
addButton.onclick = () => {
    var drinkName = _sticking()
    if (drinkName === false) return false;
    var alco = confirm(`Алкогольный? `);
    var recept = prompt(`Введите рецепт... `, '');
    drinkStorage.addValue(drinkName, { a: alco, r: recept })
    console.info(`Добавлен новый напиток "${drinkName}"`)
}
getButton.onclick = () => {
    if (drinkStorage.getKeys() == false) {
        console.error(`Список напитков пуст!`);
    } else {
        do {
            var drinkName = _sticking();
            if (drinkName === false) return false;
            var i = drinkStorage.getValue(drinkName);
            if (!i) console.error(`Напиток "${drinkName}" ещё не  был внесен!`);
        } while (!i);
        console.info(`Напиток: ${drinkName}\nАлкогольный: ${i.a ? 'Да' : 'Нет'}\nРецепт: ${i.r}`)
    }
}
deleteButton.onclick = () => {
    if (drinkStorage.getKeys() == false) {
        console.error(`Список напитков пуст!`);
    } else {
        do {
            var delKey = _sticking();
            if (delKey === false) return false;
            var i = drinkStorage.getValue(delKey);
            if (!i) console.error(`Напиток "${delKey}" отсутствует в списке!`);
        } while (!i);
        if (i) {
            drinkStorage.deleteValue(delKey);
            console.warn(`Напиток "${delKey}" удалён!`);
            if (drinkStorage.getKeys() == false) console.warn(`Список напитков был полностью очищен!`);
        } else {
            console.error(`Напитка "${delKey}"ещё нет в списке!`);
        }
    }
}
listButton.onclick = () => {
    if (drinkStorage.getKeys() == false) {
        console.error(`Список напитков пуст!`);
    } else {
        console.info(`Список напитков:\n${drinkStorage.getKeys().join('\n')}`);
    }
}