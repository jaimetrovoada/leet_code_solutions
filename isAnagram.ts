// time start 1643
// time end 1715
function isAnagram(s: string, t: string): boolean {
  let isValid = false;
  if (s.length !== t.length) {
    return false;
  }

  //                 char and charCount
  let tMap = new Map<string, number>();
  for (let char of t) {
    if (tMap.has(char)) {
      let count = tMap.get(char) as number;
      tMap.set(char, count + 1);
    } else {
      tMap.set(char, 1);
    }
  }

  console.log({ tMap });

  //                 char and charCount
  let sMap = new Map<string, number>();
  for (let char of s) {
    if (sMap.has(char)) {
      let count = sMap.get(char) as number;
      sMap.set(char, count + 1);
    } else {
      sMap.set(char, 1);
    }
  }

  console.log({ sMap });

  for (let char of sMap.keys()) {
    if (tMap.has(char)) {
      isValid = sMap.get(char) === tMap.get(char);
    } else {
      isValid = false;
      break;
    }
  }

  return isValid;
}

console.log({ anagram: isAnagram("anagram", "nagaram") });
console.log({ rat: isAnagram("rat", "car") });
console.log({ aacc: isAnagram("aacc", "ccac") });
