var Stack = function(init){
  let data = {};
  let count;
  if (init) {
    let i;
    for(i = 0; i < init.length; i++) {
      data[i] = init[i];
    }
    count = i;
  } else {
    count = 0;
  }


  this.print = function() {
    if (count === 0) {
      console.log('00000 Stack is Empty 00000')
    } else {
      console.log('***** Top of Stack *****');
      for (let i = count - 1; i >= 0; i--) {
        console.log(data[i]);
      }
      console.log('##### Bottom of Stack #####')
    }
  }

  this.push = function(newElement) {
    data[count] = newElement;
    count++;
    return newElement;
  }

  this.pop = function() {
    if(count === 0) {
      return undefined;
    }
    let popped = data[count - 1];
    delete data[count - 1];
    count--;
    return popped;
  }

  this.peek = function() {
    if(count === 0) {
      return undefined;
    }
    return data[count - 1];
  }

  this.size = function() {
    return count;
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
