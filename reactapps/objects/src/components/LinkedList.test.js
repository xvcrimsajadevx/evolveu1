import LinkedList from './LinkedList';
import LinkNode from './LinkNode';

test('Tests starting LinkedList "head" and state', () => {
  let newList = new LinkedList; //creates new Linked List

  expect(newList.head).toBe(null);
  expect(newList.previous).toBe(null);
  expect(newList.current).toBe(null);
});

test('Tests LinkedList "head" and state after first node added', () => {
  let otherList = new LinkedList; //creates new Linked List

  otherList.addNode("Math", 25); //adds first ('head') node

  expect(otherList.head).toBeInstanceOf(LinkNode);
  expect(otherList.current).toBe(otherList.head);
  expect(otherList.previous).toBe(null);
  expect(otherList.current.forwardNode).toBe(null)
});

test('Tests LinkedList "head" and state after first node added', () => {
  let nextList = new LinkedList; //creates new Linked List

  nextList.addNode("Math", 25); //adds first ('head') node
  nextList.addNode("Science", 75); //adds additional nodes
  nextList.addNode("Engish", 36); //adds additional nodes
  nextList.addNode("Phys Ed", 97); //adds additional nodes
  nextList.addNode("Construction", 64); //adds additional nodes

  expect(nextList.head).toBeInstanceOf(LinkNode);
  expect(nextList.current).toBe(nextList.head.forwardNode.forwardNode.forwardNode);
  expect(nextList.previous).toBe(nextList.head.forwardNode.forwardNode);
  expect(nextList.current.forwardNode).toBe(nextList.head.forwardNode.forwardNode.forwardNode.forwardNode);
});

test('Tests first() method of LinkedList class', () => {
  let firstList = new LinkedList; //creates new Linked List

  firstList.addNode("Math", 25); //adds first ('head') node
  firstList.addNode("Science", 75); //adds additional nodes
  firstList.addNode("Engish", 36); //adds additional nodes
  firstList.addNode("Phys Ed", 97); //adds additional nodes

  firstList.firstNode() //sets current node the Head Node

  expect(firstList.head).toBeInstanceOf(LinkNode);
  expect(firstList.previous).toBe(null);
  expect(firstList.current).toBe(firstList.head);
  expect(firstList.current.forwardNode).toBe(firstList.head.forwardNode)
});

test('Tests last() method of LinkedList class', () => {
  let lastList = new LinkedList; //creates new Linked List

  lastList.addNode("Math", 25); //adds first ('head') node
  lastList.addNode("Science", 75); //adds additional nodes
  lastList.addNode("Engish", 36); //adds additional nodes
  lastList.addNode("Phys Ed", 97); //adds additional nodes

  lastList.firstNode(); //sets current node to the Head Node
  expect(lastList.head).toBeInstanceOf(LinkNode);
  expect(lastList.previous).toBe(null);
  expect(lastList.current).toBe(lastList.head);
  expect(lastList.current.forwardNode).toBe(lastList.head.forwardNode)

  lastList.lastNode(); //sets current node to the last Node

  expect(lastList.previous).toBe(lastList.head.forwardNode.forwardNode);
  expect(lastList.current).toBe(lastList.head.forwardNode.forwardNode.forwardNode);
  expect(lastList.current.forwardNode).toBe(null);
});

test('Tests next() method of LinkedList class', () => {
  let nextList = new LinkedList; //creates new Linked List

  nextList.addNode("Math", 25); //adds first ('head') node
  nextList.addNode("Science", 75); //adds additional nodes
  nextList.addNode("Engish", 36); //adds additional nodes
  nextList.addNode("Phys Ed", 97); //adds additional nodes

  //sets current node to the Head Node
  nextList.firstNode();
  expect(nextList.previous).toBe(null);
  expect(nextList.current).toBe(nextList.head);
  expect(nextList.current.forwardNode).toBe(nextList.head.forwardNode)

  //sets current node to second Node in list
  nextList.nextNode();
  expect(nextList.previous).toBe(nextList.head);
  expect(nextList.current).toBe(nextList.head.forwardNode);
  expect(nextList.current.forwardNode).toBe(nextList.head.forwardNode.forwardNode)

  //sets current node to third Node in list
  nextList.nextNode();
  expect(nextList.previous).toBe(nextList.head.forwardNode);
  expect(nextList.current).toBe(nextList.head.forwardNode.forwardNode);
  expect(nextList.current.forwardNode).toBe(nextList.head.forwardNode.forwardNode.forwardNode)

  //sets current node to fourth Node in list
  nextList.nextNode();
  expect(nextList.previous).toBe(nextList.head.forwardNode.forwardNode);
  expect(nextList.current).toBe(nextList.head.forwardNode.forwardNode.forwardNode);
  expect(nextList.current.forwardNode).toBe(null);
});

test('Tests previous() method of LinkedList class', () => {
  let prevList = new LinkedList; //creates new Linked List

  prevList.addNode("Math", 25); //adds first ('head') node
  prevList.addNode("Science", 75); //adds additional nodes
  prevList.addNode("Engish", 36); //adds additional nodes
  prevList.addNode("Phys Ed", 97); //adds additional nodes

  //sets current node to the last node
  prevList.lastNode();
  expect(prevList.previous).toBe(prevList.head.forwardNode.forwardNode);
  expect(prevList.current).toBe(prevList.head.forwardNode.forwardNode.forwardNode);
  expect(prevList.current.forwardNode).toBe(null);

  //sets current node to previous (third) node
  prevList.previousNode();
  expect(prevList.previous).toBe(prevList.head.forwardNode);
  expect(prevList.current).toBe(prevList.head.forwardNode.forwardNode);
  expect(prevList.current.forwardNode).toBe(prevList.head.forwardNode.forwardNode.forwardNode);

  //sets current node to previous (second) node
  prevList.previousNode();
  expect(prevList.previous).toBe(prevList.head);
  expect(prevList.current).toBe(prevList.head.forwardNode);
  expect(prevList.current.forwardNode).toBe(prevList.head.forwardNode.forwardNode);

  //sets current node to previous (Head) node
  prevList.previousNode();
  expect(prevList.previous).toBe(null);
  expect(prevList.current).toBe(prevList.head);
  expect(prevList.current.forwardNode).toBe(prevList.head.forwardNode);
});
