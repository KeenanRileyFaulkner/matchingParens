export class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        this.items.push(val);
    }

    pop() {
        //what if stack is empty?
        if(this.items.length === 0) {
            throw "Error: Cannot pop empty stack";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    is_empty() {
        return this.items.length === 0;
    }

    clear() {
        while(this.items.length > 0) {
            this.items.pop();
        }
    }

    //returns a string with stack contents but DOES NOT PRINT TO CONSOLE
    toString() {
        let str = '';
        for(let i = 0; i < this.items.length; ++i) {
            str += this.items[i] + " ";
        }
        if(this.items.length === 0) {
            str += "The stack is empty";
        }
        return str;
    }
}