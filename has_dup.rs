fn main() {
    let nums: Vec<i32> = vec![1,2,7,8,2,1,7];
    
    fn sort_arr(nums: Vec<i32>) {
            let mut nums = nums;
            let mut min_index;

            for i in 0..nums.len() - 1 {
                min_index = i;
                for j in i+1..nums.len() {
                    if nums[j] < nums[min_index] {
                        min_index = j;
                        let temp = nums[min_index];
                        nums[min_index] = nums[j];
                        nums[j] = temp;
                    }
                }
            }
            print!("{:#?}",nums);
        }

    sort_arr(nums.clone());

    print!("{:#?}",nums);
}