var mountain1 = {
    name: "Kilimanjaro",
    height: 19341
};
var mountain2 = {
    name: "Everest",
    height: 29029
};
var mountain3 = {
    name: "Denali",
    height: 20310
};
var mountains = [mountain1, mountain2, mountain3];
function findNameOfTallestMountain(arrayM) {
    var tallest = 0;
    var tallMountain = "";
    for (var _i = 0, arrayM_1 = arrayM; _i < arrayM_1.length; _i++) {
        var m = arrayM_1[_i];
        if (m.height > tallest) {
            tallest = m.height;
            tallMountain = m.name;
        }
    }
    return tallMountain;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var item1 = {
    name: "pizza",
    price: 5
};
var item2 = {
    name: "burger",
    price: 2
};
var item3 = {
    name: "fries",
    price: 4
};
var items = [item1, item2, item3];
function calcAvergaeProductPrice(arrayP) {
    var total = 0;
    for (var _i = 0, arrayP_1 = arrayP; _i < arrayP_1.length; _i++) {
        var p = arrayP_1[_i];
        total += p.price;
    }
    return (total / arrayP.length);
}
var averagePrice = calcAvergaeProductPrice(items);
console.log(averagePrice);
var prod1 = {
    name: "motor",
    price: 10.00
};
var prod2 = {
    name: "sensor",
    price: 12.50
};
var prod3 = {
    name: "LED",
    price: 1.00
};
var inventory1 = {
    product: prod1,
    quantity: 10
};
var inventory2 = {
    product: prod2,
    quantity: 4
};
var inventory3 = {
    product: prod3,
    quantity: 20
};
var inventoryProducts = [inventory1, inventory2, inventory3];
function calcInventoryValue(arrI) {
    var total = 0;
    for (var _i = 0, arrI_1 = arrI; _i < arrI_1.length; _i++) {
        var i = arrI_1[_i];
        total += (i.product.price * i.quantity);
    }
    return total;
}
var totalInventory = calcInventoryValue(inventoryProducts);
console.log(totalInventory);
