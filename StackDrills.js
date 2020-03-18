const Stack = require("./Stack");

//Stack helper methods
const isEmpty = stack => {
  if (stack.top === null) {
    console.log("Stack is empty");
    return true;
  }
};

const display = stack => {
  if (isEmpty(stack)) {
    return;
  }

  tempNode = stack.top;
  while (tempNode !== null) {
    console.log(tempNode.data);
    tempNode = tempNode.next;
  }
};

const peek = stack => {
  if (isEmpty(stack)) {
    return;
  }
  return stack.top.data;
};

const isPalindrome = s => {
  if (!s) {
    return;
  }
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  //turn word into an array
  const word = s.split("");
  const wordStack = new Stack();

  //loop through word to push into new stack
  word.forEach(letter => {
    wordStack.push(letter);
  });

  /*loop through the stack, since the stack starts at the top comparing with the first index of the word
  will be in reverse order */
  let i = 0;
  while (wordStack.top !== null) {
    if (wordStack.top.data !== word[i]) {
      return false;
    }
    i++;
    wordStack.top = wordStack.top.next;
  }

  return true;
};

const paraChecker = expression => {
  if (!expression) {
    return "no expression found";
  }

  //if expression has open and close brackets then stack should be empty
  const paraStack = new Stack();
  const openBrackets = ["[", "{", "("];
  const closeBrackets = ["]", "}", ")"];
  let openBracket, closeBracket;
  for (let i = 0; i < expression.length; i++) {
    //look for brackets, if found push to stack
    openBrackets.forEach((bracket, j) => {
      if (expression[i] === bracket) {
        paraStack.push(bracket);
        openBracket = bracket;
        closeBracket = closeBrackets[j];
      }
    });
    //look for closing brackets, then pop
    for (let j = 0; j < closeBrackets.length; j++) {
      //if found
      if (expression[i] === closeBrackets[j]) {
        //check if stack is empty then missing opening bracket
        if (isEmpty(paraStack)) {
          return `You are missing ${openBrackets[j]}`;
        }
        //if not empty then pop the stack
        paraStack.pop();
      }
    }
  }
  if (!isEmpty(paraStack)) {
    return `You are missing a ${closeBracket}`;
  }

  return "Expression is good";
};

const sort = stack => {
  if (isEmpty(stack)) {
    return;
  }

  let sorted = new Stack();
  //put that op on sorted
  sorted.push(stack.pop());

  //while the stack is not empty
  while (!isEmpty(stack)) {
    //create a temp data from top of stack
    tempNode = sorted.top;
    while (tempNode !== null) {
      console.log("sorted stack", tempNode.data);
      tempNode = tempNode.next;
    }
    console.log("");
    let temp = stack.pop();

    //while sorted is not empty and temp value is greated than sorted value
    while (!isEmpty(sorted) && temp > peek(sorted)) {
      //put the value of the top of sorted on top of original stack
      stack.push(sorted.pop());
    }
    //then put to sort
    sorted.push(temp);
  }
  return sorted;
};

function main() {
  const starTrek = new Stack();

  const crew = ["Kirk", "Spock", "McCoy", "Scotty"];

  crew.forEach(name => {
    starTrek.push(name);
  });

  display(starTrek);
  console.log("Top of Stack is", peek(starTrek));

  //remove mcCoy;
  starTrek.pop();
  starTrek.pop();
  display(starTrek);

  //palindrome check
  console.log(isPalindrome("dad"));
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  console.log(isPalindrome("1001"));
  console.log(isPalindrome("Tauhida"));

  //paraChecker check
  console.log(paraChecker("(1+2)"));
  console.log(paraChecker(" 2 1+2)"));
  console.log(paraChecker(" 1+2}"));
  console.log(paraChecker("[1+2"));
  console.log(paraChecker("[(])")); //This should not pass

  //Sort
  const nonSortedStack = new Stack();
  const nums = [1, 4, 3, 8, 2];
  nums.forEach(num => {
    nonSortedStack.push(num);
  });

  display(sort(nonSortedStack));
}

main();
