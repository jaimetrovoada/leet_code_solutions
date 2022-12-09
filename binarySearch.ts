function search(nums: number[], target: number): number {
  let lowIndx = 0;
  let highIndx = nums.length - 1;

  while (lowIndx <= highIndx) {
    let midIndx = Math.floor((lowIndx + highIndx) / 2);
    console.log({ nums, midIndx, valAtMid: nums[midIndx], lowIndx, highIndx });

    if (target > nums[midIndx]) {
      lowIndx = midIndx + 1;
    } else {
      highIndx = midIndx;
    }
  }

  if (nums[lowIndx] === target) {
    return lowIndx;
  } else if (nums[highIndx] === target) {
    return highIndx;
  } else {
    return -1;
  }
}

console.log({ search: search([-1, 0, 3, 5, 9, 12], 9) });
console.log({ search: search([2, 5], 5) });
console.log({ search: search([-1, 0, 3, 5, 9, 12], 2) });
