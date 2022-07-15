use std::collections::HashSet;
use std::iter::FromIterator;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let nums_set : HashSet<i32> = HashSet::from_iter(nums.iter().cloned());
        
        nums.len() != nums_set.len()
    }
}
