// stack implementation test

/* let stack: string[] = [];

stack.push("(");
stack.push(")");

const topItem = stack.pop(); */

function isValid(s: string): boolean {
  let valid = false;
  let stack: string[] = [];
  for (let char of s) {
    const lastItem = stack.length - 1;

    const isOpening = char === "(" || char === "{" || char === "[";
    const isClosing = char === ")" || char === "}" || char === "]";

    if (isOpening) {
      stack.push(char);
    }

    if (isClosing) {
      if (stack.length === 0) {
        valid = false;
        break;
      }

      if (char === ")" && stack[lastItem] === "(") {
        stack.pop();
      } else if (char === "}" && stack[lastItem] === "{") {
        stack.pop();
      } else if (char === "]" && stack[lastItem] === "[") {
        stack.pop();
      } else {
        valid = false;
        break;
      }

      /*   if (char === ")" && stack[lastItem] !== "(") {
        valid = false;
        break;
      }
      if (char === "}" && stack[lastItem] !== "{") {
        valid = false;
        break;
      }
      if (char === "]" && stack[lastItem] !== "[") {
        valid = false;
        break;
      } */
    }

    valid = stack.length === 0;
  }

  console.log({ valid });
  return valid;
}

isValid("(])");
