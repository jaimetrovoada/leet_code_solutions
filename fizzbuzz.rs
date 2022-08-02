impl Solution {
    pub fn fizz_buzz(n: i32) -> Vec<String> {
        let mut output: Vec<String> = Vec::new();

        for i in 1..n+1 {
            
            let mut ans: String = i.to_string();

            if i % 3 == 0 {
                ans = "Fizz".to_string();
            }
            if i % 5 == 0 {
                ans ="Buzz".to_string();
            }
            if i % 3 == 0 && i % 5 == 0 {
                ans = "FizzBuzz".to_string();
            }
            output.push(ans);
        }
        return output
        
    }
}
