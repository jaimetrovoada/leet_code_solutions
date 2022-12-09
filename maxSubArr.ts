function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let sum = max;

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    max = Math.max(sum, max);
  }

  return max;
}

console.log({ maxSubArr: maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) });
