class Shop {
    // private shopName
    #shopName;

    constructor(shopName, items) {
        this.#shopName = shopName;
        this.items = items;
    }

    showItems() {
        console.log(this.#shopName);
        for (let { id, name, price, qty, category } of this.items) {
            console.log(id, name, price, category);
        }
    }

    addItem({ name, price, qty, category }) {
        const newItem = { name, price, qty, category };
        this.items = [...this.items, { id: this.#generateID(), ...newItem }];
    }

    updateItem(productName, newName) {
        for (let item of this.items) {
            if (productName === item.name) {
                item.name = newName;
            }
        }
    }

    removeItem(productToRemove) {
        for (let item of this.items) {
            if (productToRemove === item.name) {
                let idx = this.items.indexOf(item);
                this.items.splice(idx, 1);
            }
        }
    }

    #generateID() {
        return Math.random().toString().slice(2);
    }
}

let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

const silpo = new Shop("Silpo", items);

// silpo.#shopName = null;
// silpo.items = null;

// console.log(silpo);

let pear = { name: "pear", price: 35, qty: 378, category: "fruits" };
silpo.addItem(pear);
silpo.showItems();
