function maxProfit(prices: number[]): number {
  let stack: number[] = [];
  let diff = 0;

  stack.push(prices[0]);
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < stack[stack.length - 1]) {
      stack.pop();
      stack.push(prices[i]);
    } else {
      diff =
        diff > prices[i] - stack[stack.length - 1]
          ? diff
          : prices[i] - stack[stack.length - 1];
      // diff = Math.max(diff, prices[i] - stack[stack.length - 1]);
    }
    console.log({ stack, diff });
  }

  return diff;
}

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2, 4]));
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
