let LinkedList = function() {
  let length = 0;
  let head = null;

  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.size = function() {
    return length;
  }

  this.head = function() {
    return head;
  }

  this.add = function(element) {
    let node = new Node(element);
    if (!head) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  this.remove = function(element) {
    removeNode = new Node(element);

    if (head.element === removeNode.element) {
      head = head.next;
    } else {
      let previousNode = head;
      let currentNode = head.next;
      while (currentNode.element !== removeNode.element) {
        previousNode = currentNode;
        if (currentNode.next) {
          currentNode = currentNode.next
        } else {
          return false;
        }
      }
      previousNode.next = currentNode.next;
    }

    length--;
    return removeNode;
  }

  this.isEmpty = function() {
    return (length === 0);
  }

  this.print = function() {
    console.log('***** Start of Linked List *****');
    let currentNode = head;
    while (currentNode) {
      console.log(currentNode.element);
      if (currentNode.next) {
        console.log('||');
        console.log('\\/');
      }
      currentNode = currentNode.next;
    };
    console.log('##### End of Linked List #####');
  }
}

let myLinkedList = new LinkedList();
console.log(myLinkedList.isEmpty());
myLinkedList.add('This');
myLinkedList.add('Is');
myLinkedList.add('My');
myLinkedList.add('Linked');
myLinkedList.add('List');
console.log(myLinkedList.isEmpty())
myLinkedList.print();
myLinkedList.remove('My');
myLinkedList.print();
myLinkedList.remove('This');
myLinkedList.remove('Is');
myLinkedList.remove('Linked');
myLinkedList.remove('List');
myLinkedList.print();
console.log(myLinkedList.isEmpty())
