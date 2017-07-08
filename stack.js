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

}

let myStack = new Stack([1,2,3]);
console.log(JSON.stringify(myStack.storage));
console.log(myStack.length);
myStack.push(5);
// console.log(myVar)
console.log(JSON.stringify(myStack.storage));
console.log(myStack.length);
let myPeeked = myStack.peek();
console.log(myPeeked)
console.log(JSON.stringify(myStack.storage));
console.log(myStack.length);
