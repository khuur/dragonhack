// This function calculates the maximum profit you could have made by buying and selling a stock once.
function maxProfit(prices) {
    // We start by setting the minimum price to the highest possible number and the maximum profit to 0.
    var minPrice = Infinity;
    var maxProfit = 0;

    // We go through the array of prices, price by price.
    for (var i = 0; i < prices.length; i++) {
        var currentPrice = prices[i];

        // If the current price is less than the minimum price we've seen so far, we update the minimum price.
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } 
        // If the current price minus the minimum price is more than the maximum profit we've seen so far, we update the maximum profit.
        else if (currentPrice - minPrice > maxProfit) {
            maxProfit = currentPrice - minPrice;
        }
    }

    // We return the maximum profit.
    return maxProfit;
}

module.exports = maxProfit;