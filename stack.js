var Stack = function(init){
  this.storage = {};
  if (init) {
    let i;
    for(i = 0; i < init.length; i++) {
      this.storage[i] = init[i];
    }
    this.length = i;
  } else {
    this.length = 0;
  }


  this.print = function() {
    if (this.length === 0) {
      console.log('00000 Stack is Empty 00000')
    } else {
      console.log('***** Top of Stack *****');
      for (let i = this.length - 1; i >= 0; i--) {
        console.log(this.storage[i]);
      }
      console.log('##### Bottom of Stack #####')
    }
  }

  this.push = function(newElement) {
    this.storage[this.length] = newElement;
    this.length++;
    return newElement;
  }

  this.pop = function() {
    if(this.length === 0) {
      return undefined;
    }
    let popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return popped;
  }

  this.peek = function() {
    if(this.length === 0) {
      return undefined;
    }
    return this.storage[this.length - 1];
  }

  this.size = function() {
    return this.length;
  }

}

let myStack = new Stack([1,2,3]);
myStack.print();
console.log(myStack.size());
myStack.push(5);
myStack.print();
console.log(myStack.size());
let myPeeked = myStack.peek();
console.log(myPeeked)
myStack.print();
console.log(myStack.size());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
