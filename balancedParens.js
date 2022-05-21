// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
import {Stack} from './stack.js';

const OPEN = "({[<";
const CLOSE = ")}]>";

const isOpen = ch => {
    return OPEN.includes(ch);
}

const isClose = ch => {
    return CLOSE.includes(ch);
}

const isBalanced = string => {
    let balanced = true;
    let myStack = new Stack();
    for(let i = 0; i < string.length && balanced; ++i) {
        let currChar = string[i];
        if(!isOpen(currChar) && !isClose(currChar)) {
            continue;
        } else if (isOpen(currChar)) {
            myStack.push(currChar);
        } else {
            if(myStack.is_empty()) {
                balanced = false;
            } else {
                let top = myStack.pop();
                balanced = (OPEN.indexOf(top) === CLOSE.indexOf(currChar))
            }
        }
    }

    return balanced && myStack.is_empty();
}

let test = [];
const check = [true, false, false, false, false, false, true, false, true, true, false, true, false, true];

test.push(isBalanced("()"));
test.push(isBalanced("(Oh Noes!)("));
test.push(isBalanced("((There's a bonus open paren here.)"));
test.push(isBalanced(")"));
test.push(isBalanced("("));
test.push(isBalanced("(This has (too many closes.) ) )"));
test.push(isBalanced("Hey...there are no parens here!"));
test.push(isBalanced("({])"));
test.push(isBalanced("({})<>[][<()>]"));
test.push(isBalanced("{}()<>[]"));
test.push(isBalanced(sample1));
test.push(isBalanced(sample2));
test.push(isBalanced(sample3));
test.push(isBalanced(sample4));

let codeworks = true;
for(let i = 0; i < test.length; ++i) {
    if(test[i] !== check[i]) {
        codeworks = false;
        break;
    }
}

codeworks ? console.log("The algorithm works!") : console.log("There is a bug in your code");
