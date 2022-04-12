let prices = [100, 200, 300];
//prices.map();
//prices.map(() => { });
let new_Prices = prices.forEach((price) => {
    return price + 10
});
console.log(prices);
console.log(new_Prices)