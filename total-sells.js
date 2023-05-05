function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "Please give positive value";
    }

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    let totalShirtSell = perShirtPrice * shirtQuantity;
    let totalPantSell = perPantPrice * pantQuantity;
    let totalShoeSell = perShoePrice * shoeQuantity;

    const totalSell = totalShirtSell + totalPantSell + totalShoeSell;

    return totalSell;
}

const shirtQuantity = 10;
const pantQuantity = 3;
const shoeQuantity = 1;

const totalSold = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(totalSold);