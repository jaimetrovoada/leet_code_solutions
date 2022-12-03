fn main() {
    // let nums = vec![-2, -1];
    let nums = vec![-1, -2];
    // let nums = vec![-1,0,-2];
    // let nums = vec![5, 4, -1, 7, 8];
    // let nums = vec![-2,1,-3,4,-1,2,1,-5,4];
    let mut max: i32 = 0;
    let mut start_point = 0;

    // let num_possible_sub_arr = nums.len();
    // let num_possible_sub_arr_pos = nums.len() - sub_arr.len() + 1;
    let size = nums.len()


    if nums.len() == 1 {
        max = nums[0]
    }
    loop {
        if start_point == nums.len() {
            break;
        }
        let sub_arr = nums[start_point..nums.len()].to_vec();
        println!("sub_arr {:?}", sub_arr);
        let mut sum: i32 = 0;
        for j in 0..sub_arr.len() {
            sum += sub_arr[j];
            if sub_arr.len() == nums.len() {
              max = sum;
            }
            if sum > max {
                max = sum;
            }
            if j == sub_arr.len() - 1 {
                start_point += 1;
            }
        }
    }
    println!("max {}", max);
}
