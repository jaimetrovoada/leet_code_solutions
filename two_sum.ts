function twoSum(nums: number[], target: number): number[] {
  let remainTarget: number;
  let solution: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    remainTarget = target - nums[i];
    for (let j = 0; j < remainTarget; j++) {
      if (nums[j] === remainTarget && i !== j) {
        solution = [i, j];
      }
    }
  }
  return solution;
}
