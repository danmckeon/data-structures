var Queue = function() {
//   ARRAY IMPLEMENTATION

//   var data = [];
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

  var data = {};
  var enqueueCount = 0;
  var dequeueCount = 0;

  this.enqueue = function(element) {
    data[enqueueCount] = element;
    enqueueCount++;
  }

  this.dequeue = function() {
    var dequeued = data[dequeueCount];
    delete data[dequeueCount];
    dequeueCount++;
    return dequeued;
  }

  this.print = function() {
    if(this.isEmpty()) {
      console.log('Queue is empty')
    } else {
      console.log('Next to dequeue: ')
      for(var i = dequeueCount; i < enqueueCount; i++) {
        console.log(data[i]);
      }
      console.log('End of queue.')
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


var myQueue = new Queue();
myQueue.print();
myQueue.enqueue("One");
console.log(myQueue.isEmpty())
console.log(myQueue.front())
console.log(myQueue.size());
myQueue.enqueue("Two");
myQueue.enqueue("Three");
myQueue.print();
var testDequeue = myQueue.dequeue();
myQueue.print();
console.log(myQueue.isEmpty())
