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

  this.indexOf = function(element) {
    if (!head) {
      return -1;
    } else {
      let currentNode = head;
      let currentIndex = 0;
      while (currentNode) {
        if (currentNode.element === element) {
          return currentIndex;
        }
        currentIndex++;
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  this.elementAt = function(searchIndex) {
    let currentIndex = 0;
    let currentNode = head;
    if (searchIndex >= length) {
      return false;
    } else {
      while (currentIndex !== searchIndex) {
        currentIndex++;
        currentNode = currentNode.next;
      }
      return currentNode.element;
    }
  }

  this.addAt = function(element, addIndex) {
    if (addIndex >= length) {
      return false;
    }
    let addNode = new Node(element);
    if (addIndex === 0) {
      addNode.next = head;
      head = addNode;
    } else {
      let previousNode = head;
      let currentNode = head.next;
      let currentIndex = 1;
      while (currentIndex !== addIndex) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      addNode.next = currentNode;
      previousNode.next = addNode;
    }
    return addNode;
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
console.log('Current Index of "Linked": ' + myLinkedList.indexOf('Linked'))
console.log('Current Element of Index 2: ' + myLinkedList.elementAt(2))
myLinkedList.remove('My');
myLinkedList.print();
myLinkedList.addAt('My', 0);
console.log('After adding back in "My" at index 2...')
myLinkedList.print();
myLinkedList.remove('This');
myLinkedList.remove('Is');
myLinkedList.remove('Linked');
myLinkedList.print();
console.log('Current Index of "List": ' + myLinkedList.indexOf('List'))
console.log('Current Element of Index 2: ' + myLinkedList.elementAt(2))
myLinkedList.remove('List');
myLinkedList.print();
console.log('Current Index of "Linked": ' + myLinkedList.indexOf('Linked'))
console.log(myLinkedList.isEmpty())
