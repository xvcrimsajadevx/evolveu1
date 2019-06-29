import LinkNode from './LinkNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.current = this.head;
    this.previous = null;
  }

  firstNode = () => {
    this.current = this.head; //Sets current node to Head node
    this.previous = null; //Sets previous node to equal Null
  }

  lastNode = () => {
    while ( this.current.forwardNode !== null ) { //Steps through nodes,
      this.previous = this.current; //setting previous node to current node and
      this.current = this.current.forwardNode; //updating current node with next forwardNode until end of the list
    }
  }

  nextNode = () => {
    if ( this.current.forwardNode !== null ) {
      this.previous = this.current; //Steps through nodes, setting previous node to current node
      this.current = this.current.forwardNode; //and setting current node to next forwardNode
    }
  }

  previousNode = () => {
    let targetNode = this.current;

    this.current = this.head;
    this.previous = null;

    while ( this.current !== targetNode && this.current.forwardNode !== targetNode ) {
      this.previous = this.current;
      this.current = this.current.forwardNode;
    }
  }

  addNode = (subject, amount) => {
    let newNode = new LinkNode(subject, amount);

    if (this.head === null) {
      this.head = newNode;
      this.current = this.head;
    } else {
      while ( this.current.forwardNode !== null ) {
        this.previous = this.current;
        this.current = this.current.forwardNode;
      }

      this.previous = this.current;
      this.current.forwardNode = newNode;
      this.current = this.current.forwardNode;
    }
  }

  insertNode = (subject, amount) => {
    let newNode = new LinkNode(subject, amount);

    let tempNode = this.current.forwardNode;
    this.current.forwardNode = newNode;

    this.previous = this.current;
    this.current = this.current.forwardNode;
    this.current.forwardNode = tempNode;
  }

  deleteNode = () => {
    if ( this.current === this.head ) {
      this.head = this.current.forwardNode;
      this.current = this.head;
    } else if ( this.current.forwardNode === null){
      let targetNode = this.current;

      this.current = this.head;
      this.previous = null;

      while ( this.current.forwardNode !== targetNode ) {
        this.previous = this.current;
        this.current = this.current.forwardNode;
      }

      this.current.forwardNode = null;
    } else {
      this.previous.forwardNode = this.current.forwardNode;
      this.current = this.previous.forwardNode;
    }
  }

  total = () => {
    let current = this.head;
    let total = 0;

    while ( current !== null ) {
      total = total + current.amount;

      current = current.forwardNode;
    }
    return total;
  }

}

export default LinkedList;
