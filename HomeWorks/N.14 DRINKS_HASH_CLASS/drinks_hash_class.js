'use strict';
// 1
class HashStorageFunc {
    constructor() {
        this.storage = {};
    }
    addValue(key, value) {
        this.storage[key] = value;
        console.log(this.storage);
    }
    getValue(key) {
        return this.storage[key];
    }
    getKeys() {
        return Object.keys(this.storage);
    }
    deleteValue(delKey) {
        if (delKey in this.storage) {
            delete this.storage[delKey];
            return true;
        }
        else {
            return false;
        }
    };

}
// 2
var drinkStorage = new HashStorageFunc();
// 3
addButton.onclick = () => {
    do {
        var drinkName = prompt('Введите название напитка', '');
        if (drinkName === null) return false;
        if (!drinkName) console.error(`Название напитка не может быть пустым!`);
    } while (!drinkName);
    var alco = confirm(`Алкогольный? `);
    var recept = prompt(`Введите рецепт... `, '');
    drinkStorage.addValue(drinkName, { a: alco, r: recept })
}
getButton.onclick = () => {
    do {
        var drinkName = prompt(`Введите название напитка ...`, '');
        if (drinkName === null) return false;
        if (!drinkName) console.error(`Название напитка не может быть пустым!`);
    } while (!drinkName);
    var i = drinkStorage.getValue(drinkName);
    if (i) {
        console.info(`Напиток: ${drinkName}\nАлкогольный: ${i.a ? 'Да' : 'Нет'}\nРецепт: ${i.r}`)
    } else {
        console.error(`Напиток "${drinkName}" ещё не  был внесен!`);
    }
}
deleteButton.onclick = () => {
    do {
        var delKey = prompt('Введите название напитка для удаления', '');
        if (delKey === null) return false;
        if (!delKey) console.error(`Название удаляемого напитка не может быть пустым!`);
    } while (!delKey);
    if (drinkStorage.getValue(delKey)) {
        drinkStorage.deleteValue(delKey);
        console.warn(`Напиток "${delKey}" удалён!`);
    } else {
        console.error(`Напитка "${delKey}" нет в списке!`);
    }
}
listButton.onclick = () => {
    if (drinkStorage.getKeys() == false) {
        console.error(`Список напитков пуст!`);
    } else {
        console.info(drinkStorage.getKeys().join('\n'));
    }
}
/*
addButton.onclick = () => {
    var drinkName = prompt('Введите название напитка', '');
    var alco = confirm(`Алкогольный? `);
    var recept = prompt(`Введите рецепт... `, '');
    // return
    drinkStorage.addValue(drinkName, { a: alco, r: recept })

}
getButton.onclick = () => {
    var drinkName = prompt(`Введите название напитка ...`, '');
    var i = drinkStorage.getValue(drinkName);
    console.info(`Напиток: ${drinkName}\nАлкогольный: ${i.a ? 'Да' : 'Нет'}\nРецепт: ${i.r}`)
}
deleteButton.onclick = () => {
    var delKey = prompt('Введите название напитка для удаления', '');
    drinkStorage.deleteValue(delKey);
}
listButton.onclick = () => {
    console.info(drinkStorage.getKeys().join('\n'));
}
*/