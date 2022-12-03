function isPalindrome(s: string): boolean {
  if (s === "" || s === "") {
    return true;
  }

  let newString = "";

  newString = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");

  const stringArr = (() => {
    const arr: string[] = [];
    for (let char of newString) {
      arr.push(char);
    }
    return arr;
  })();

  const reverseString = stringArr.reverse().join("").toString();

  console.log({
    newString,
    reverseString,
    stringArr,
    reverse: stringArr.reverse(),
  });
  return newString === reverseString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
console.log(isPalindrome("a."));
