let MySet = function() {
// OBJECT IMPLEMENTATION

  this.data = {}
  this.has = function(searchElement) {
    return (this.data[searchElement]);
  }

  this.values = function() {
    let values = [];
    for (let value in this.data) {
      values.push(value);
    }
    return values;
  }

  this.print = function() {
    console.log('***** Current Set *****')
    console.log(this.values());
    console.log('##### End of Set #####')
  }

  this.add = function(addElement) {
    if (this.data[addElement]) {
      return false;
    } else {
      this.data[addElement] = addElement;
      return addElement;
    }
  }

  this.remove = function(removeElement) {
    if(this.data[removeElement]) {
      delete this.data[removeElement];
      return removeElement;
    } else {
      return false;
    }
  }

  this.size = function() {
    return Object.keys(this.data).length;
  }

  this.union = function(comparisonSet) {
    let unionSet = new MySet();
    for (let val in comparisonSet.data) {
      unionSet.add(val);
    }
    for (let val in this.data) {
      unionSet.add(val);
    }
    return unionSet;
  }

  this.intersection = function(comparisonSet) {
    let intersectionSet = new MySet();
    let potentialIntersections = comparisonSet;
    for (let val in this.data) {
      if (potentialIntersections.data[val]) intersectionSet.add(val);
    }
    return intersectionSet;
  }

  this.difference = function(comparisonSet) {
    let differenceSet = new MySet();
    for (let val in this.data) {
      if (!comparisonSet.data[val]) differenceSet.add(val);
    }
    for (let val in comparisonSet.data) {
      if (!this.data[val]) differenceSet.add(val);
    }
    return differenceSet;
  }

  this.subset = function(potentialSubset) {
    let isSubset = true;
    for (let val in potentialSubset.data) {
      if (!this.data[val]) isSubset = false;
    }
    return isSubset;
  }
}

let mySet = new MySet();
console.log(mySet.size());
mySet.add('1');
mySet.add('a');
mySet.add('y');
mySet.add('sdfd');
mySet.add('2');
mySet.add('1');
mySet.add('1');
mySet.print();
console.log(mySet.size());
mySet.remove('2');
mySet.remove('y');
mySet.print();
mySecondSet = new MySet();
mySecondSet.add('5');
mySecondSet.add('1');
mySecondSet.add('y');
mySecondSet.print();
console.log('----- Union Set -----')
mySet.union(mySecondSet).print();
console.log('---------------------')
console.log('----- Intersection Set -----')
mySet.intersection(mySecondSet).print();
console.log('----------------------------')
console.log('----- Difference Set -----')
mySet.difference(mySecondSet).print();
console.log('--------------------------')
console.log('----- Subset Should Be False -----')
console.log(mySet.subset(mySecondSet))
console.log('----------------------------------')
mySecondSet.remove('5');
mySecondSet.remove('y');
console.log('----- Subset Should Be True -----')
console.log(mySet.subset(mySecondSet))
console.log('---------------------------------')
