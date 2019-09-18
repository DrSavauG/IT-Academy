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
            console.warn(`Напиток ${delKey} удалён!`);
            return true;
        }
        else {
            console.error(`Напиток ${delKey} не  был передан!`);
            return false;
        }
    };

}
// 2
var drinkStorage = new HashStorageFunc();
// 3
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