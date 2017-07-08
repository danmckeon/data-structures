let Queue = function() {
//   ARRAY IMPLEMENTATION

//   let data = [];
//   this.enqueue = function(element) {
//     data.push(element);
//   }
//   this.dequeue = function() {
//     return data.shift();
//   }
//   this.print = function() {
//     console.log(data);
//   }
//   this.front = function() {
//     return data[0];
//   }
//   this.size = function() {
//     return data.length;
//   }
//   this.isEmpty = function() {
//     return (data.length === 0);
//   }

//   OBJECT IMPLEMENTATION

  let data = {};
  let enqueueCount = 0;
  let dequeueCount = 0;

  this.enqueue = function(element) {
    data[enqueueCount] = element;
    enqueueCount++;
  }

  this.dequeue = function() {
    let dequeued = data[dequeueCount];
    delete data[dequeueCount];
    dequeueCount++;
    return dequeued;
  }

  this.print = function() {
    if(this.isEmpty()) {
      console.log('00000 Queue is Empty 00000')
    } else {
      console.log('***** Next to Dequeue *****')
      for(let i = dequeueCount; i < enqueueCount; i++) {
        console.log(data[i]);
      }
      console.log('##### Last to dequeue #####')
    }

  }

  this.front = function() {
    return data[dequeueCount];
  }

  this.size = function() {
    return enqueueCount - dequeueCount;
  }

  this.isEmpty = function() {
    return (enqueueCount === dequeueCount);
  }
}


let myQueue = new Queue();
myQueue.print();
myQueue.enqueue('One');
console.log(myQueue.isEmpty())
console.log(myQueue.front())
console.log(myQueue.size());
myQueue.enqueue('Two');
myQueue.enqueue('Three');
myQueue.print();
let testDequeue = myQueue.dequeue();
myQueue.print();
console.log(myQueue.isEmpty())
