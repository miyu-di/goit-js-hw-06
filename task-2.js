'use strict';

class Storage {
  #items;

  constructor(initialItems) {
    this.#items = [...initialItems];
  }

  getItems() {
    return this.#items.slice();
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexToRemove = this.#items.indexOf(itemToRemove);

     if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
    }
  }
}

  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());