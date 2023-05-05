function deliveryCost(quantity) {
    const firstProduct = 100;
    const secondProduct = 100;


    const firstHundreadPerProductDelevaryCost = 100;
    const secondHundreadPerProductDelevaryCost = 80;
    const graterThanTwoHundreadPerProductDelevaryCost = 50;

    if (quantity >= 101 && quantity <= 200) {
        let after100remainingProduct = quantity - firstProduct;
        let first100ProductCost = firstProduct * firstHundreadPerProductDelevaryCost;
        let second200ProductCost = after100remainingProduct * secondHundreadPerProductDelevaryCost;

        const secondDelevaryCost = first100ProductCost + second200ProductCost;
        return secondDelevaryCost;
    }
    else if (quantity >= 201) {
        let after100remainingProduct = quantity - firstProduct;
        let second100remainingProduct = after100remainingProduct - secondProduct;
        let first100ProductsDelevaryCost = firstProduct * firstHundreadPerProductDelevaryCost;
        let second100ProductsDelevaryCost = secondProduct * secondHundreadPerProductDelevaryCost;
        let thirdRemainingProductsDelevaryCost = second100remainingProduct * graterThanTwoHundreadPerProductDelevaryCost;
        let thridProductsDelvaryCost = first100ProductsDelevaryCost + second100ProductsDelevaryCost + thirdRemainingProductsDelevaryCost;

        return thridProductsDelvaryCost;

    }
    else if (quantity == 100) {
        let firstHundreadDelevaryCost = firstHundreadPerProductDelevaryCost * quantity;
        return firstHundreadDelevaryCost;
    }
}

console.log(deliveryCost(110));



