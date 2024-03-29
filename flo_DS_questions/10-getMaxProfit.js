// Given an array stock_prices, where the values in the array are the different prices of a stock in a given day, write a function that returns the highest profit that could have been made from buying and selling a stock that day.
// Example:
// stock_prices = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices)
// # Returns 6 (buying for $5 and selling for $11)

// stock_prices = [11, 5, 7, 2, 9, 10]

// get_max_profit(stock_prices)
// # Returns 8 (buying for $2 and selling for $10)

function getMaxProfit(stockPrices) {
  let maxProfit = 0;
  for (let i = 0; i < stockPrices.length; i++) {
    console.log(stockPrices[i]);
    for (let j = i; j < stockPrices.length; j++) {
      console.log(stockPrices[j]);

      let profit = stockPrices[j] - stockPrices[i];

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  console.log(maxProfit); //  6, 8

  return maxProfit;
}

let stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices)); // 6

let secondStockPrices = [11, 5, 7, 2, 9, 10];
console.log(getMaxProfit(secondStockPrices)); // 8

////////////////////////////////////////////////////////////////////////////////
// second approach with only one loop
function getMaxProfit2(stockPrices) {
  let buy = 0;
  let sell = stockPrices[0];

  for (let i = 0; i < stockPrices.length; i++) {
    let result = stockPrices[i];
    console.log(result);
    if (result < sell) sell = result;

    let newProfit = result - sell;
    console.log(newProfit); // 0,0,0,3,6,4 --- // 0,0,2,0,7,8 --> max 6 & 8
    buy = Math.max(buy, newProfit);
  }

  return buy;
}

console.log(getMaxProfit2(stockPrices)); // 6
console.log(getMaxProfit2(secondStockPrices)); // 8
