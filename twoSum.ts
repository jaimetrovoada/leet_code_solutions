function twoSum(nums: number[], target: number): number[] {
  let indices: number[] = [];
  let numsMap = new Map<number, number>(nums.map((val, index) => [val, index]));
  console.log(numsMap);

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log({ diff });

    if (numsMap.has(diff) && numsMap.get(diff) !== i) {
      console.log("has diff", numsMap.has(diff));
      indices.push(i, numsMap.get(diff));
      break;
    }
  }

  return indices;
}

console.log(twoSum([3, 2, 4], 6));
