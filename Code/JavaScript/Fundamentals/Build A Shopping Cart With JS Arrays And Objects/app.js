let ShoppingCart = {
    items: [],
    additem: function(item) {
        this.items.push(item);
    }
};

function item(name,price) {
    this.name = name;
    this.price = price;
};

let item1 = new item('Shirt', 20);
let item2 = new item('Pants', 30);

ShoppingCart.additem(item1)
ShoppingCart.additem(item2)

ShoppingCart. removeitem = function(index) {
    this.items.splice(index, 1);
};

ShoppingCart.calculateTotal = function() {
    let total = 0;
    for ( let i = 0; i < this.items.length; i++){
        total += this.items[i].price;
    }
    return total;
};

ShoppingCart.ApplyDiscountCode = function(code) {
    switch (code) {
        case 'SAVE10':
            return this.calculateTotal() * 0.9;
        case 'SAVE20':
            return this.calculateTotal() * 0.8;
        default:
            return this.calculateTotal() ;
    }
};

ShoppingCart.GetCurrentItems = function() {
    return this.items.map( item => item.name);
};


console.log (ShoppingCart.GetCurrentItems());

ShoppingCart.removeitem(0);
console.log (ShoppingCart.GetCurrentItems());

console.log (ShoppingCart.calculateTotal());

console.log (ShoppingCart.ApplyDiscountCode('SAVE20'));



