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
    this.previous = this.current; //Steps through nodes, setting previous node to current node
    this.current = this.current.forwardNode; //and setting current node to next forwardNode
  }

  previousNode = () => {
    let targetNode = this.current

    this.current = this.head;
    this.previous = null;

    while ( this.current.forwardNode !== targetNode ) {
      this.previous = this.current;
      this.current = this.current.forwardNode
    }
  }

  addNode = (subject, amount) => {
    let newNode = new LinkNode(subject, amount)

    if (this.head === null) {
      this.head = newNode;
      this.current = this.head;
    } else {
      this.previous = this.current;

      while ( this.current.forwardNode !== null ) {
        this.current = this.current.forwardNode
      }

      this.current.forwardNode = newNode;
    }
  }

}

export default LinkedList
