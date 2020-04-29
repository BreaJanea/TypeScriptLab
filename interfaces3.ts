interface Mountain {
    name: string;
    height: number;
}

let mountain1: Mountain = {
    name: "Kilimanjaro",
    height: 19341
}

let mountain2: Mountain = {
    name: "Everest",
    height: 29029
}

let mountain3: Mountain = {
    name: "Denali",
    height: 20310
}

let mountains: Mountain[] = [mountain1, mountain2, mountain3]

function findNameOfTallestMountain(arrayM:Mountain[]) {
    let tallest:number =0;
    let tallMountain:string = "";
    for (let m of arrayM) {
        if (m.height > tallest) {
            tallest = m.height;
            tallMountain = m.name;
        }
    }
    return tallMountain;
}
let tallestMountain:string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);




interface Products {
    name: string;
    price: number;
}

let item1: Products = {
    name: "pizza",
    price: 5
}

let item2: Products = {
    name: "burger",
    price: 2
}

let item3: Products = {
    name: "fries",
    price: 4
}

let items: Products[] = [item1, item2, item3]

function calcAvergaeProductPrice(arrayP:Products[]){
let total:number = 0;

for (let p of arrayP){
    total += p.price
}

return(total/arrayP.length)
}

let averagePrice:number =  calcAvergaeProductPrice(items);

console.log(averagePrice)


interface InventoryItem {
    product: Products;
    quantity:number;
}
let prod1:Products = {
    name:"motor",
    price:10.00
}
let prod2:Products = {
    name:"sensor",
    price:12.50
}
let prod3:Products = {
    name:"LED",
    price:1.00
}
let inventory1:InventoryItem = {
    product: prod1,
    quantity: 10,
}
let inventory2:InventoryItem = {
    product: prod2,
    quantity: 4,
}
let inventory3:InventoryItem = {
    product: prod3,
    quantity: 20,
}
let inventoryProducts:InventoryItem[] = [inventory1, inventory2, inventory3];
function calcInventoryValue(arrI:InventoryItem[]):number {
    let total:number = 0;
    for (let i of arrI) {
        total += (i.product.price * i.quantity);
    }
    return total;
}
let totalInventory:number = calcInventoryValue(inventoryProducts);
console.log(totalInventory);