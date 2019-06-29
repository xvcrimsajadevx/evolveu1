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

test('Tests LinkedList "head" and state after additional nodes added', () => {
  let addList = new LinkedList; //creates new Linked List

  addList.addNode("Math", 25); //adds first ('head') node
  addList.addNode("Science", 75); //adds additional nodes
  addList.addNode("English", 36); //adds additional nodes
  addList.addNode("Phys Ed", 97); //adds additional nodes
  addList.addNode("Construction", 64); //adds additional nodes

  expect(addList.head).toBeInstanceOf(LinkNode);
  expect(addList.current).toBe(addList.head.forwardNode.forwardNode.forwardNode.forwardNode);
  expect(addList.previous).toBe(addList.head.forwardNode.forwardNode.forwardNode);
  expect(addList.current.forwardNode).toBe(null);
});

test('Tests first() method of LinkedList class', () => {
  let firstList = new LinkedList; //creates new Linked List

  firstList.addNode("Math", 25); //adds first ('head') node
  firstList.addNode("Science", 75); //adds additional nodes
  firstList.addNode("English", 36); //adds additional nodes
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
  lastList.addNode("English", 36); //adds additional nodes
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
  nextList.addNode("English", 36); //adds additional nodes
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

  //Takes and additional step; nothing should happen
  nextList.nextNode();
  expect(nextList.previous).toBe(nextList.head.forwardNode.forwardNode);
  expect(nextList.current).toBe(nextList.head.forwardNode.forwardNode.forwardNode);
  expect(nextList.current.forwardNode).toBe(null);
});

test('Tests previous() method of LinkedList class', () => {
  let prevList = new LinkedList; //creates new Linked List

  prevList.addNode("Math", 25); //adds first ('head') node
  prevList.addNode("Science", 75); //adds additional nodes
  prevList.addNode("English", 36); //adds additional nodes
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

test('Tests insertNode() by inserting node between third and fourth item. Also tests that addNode adds an item to the end of the list.', () => {
  let insertList = new LinkedList; //creates new Linked List

  insertList.addNode("Math", 25); //adds first ('head') node
  insertList.addNode("Science", 75); //adds additional nodes
  insertList.addNode("English", 36); //adds additional nodes
  insertList.addNode("Phys Ed", 97); //adds additional nodes

  insertList.firstNode();
  insertList.nextNode();
  insertList.nextNode();
  expect(insertList.current).toBe(insertList.head.forwardNode.forwardNode);

  insertList.insertNode("Construction", 64);
  expect(insertList.previous.show()).toBe('English 36')
  expect(insertList.current.show()).toBe('Construction 64')
  expect(insertList.current.forwardNode.show()).toBe('Phys Ed 97')

  insertList.firstNode();
  insertList.addNode("Social", 45);
  expect(insertList.previous.show()).toBe('Phys Ed 97')
  expect(insertList.current.show()).toBe('Social 45')
  expect(insertList.current.forwardNode).toBe(null)
});

test('Tests deleteNode() by deleting the Head, a central node, and then an end node', () => {
  let deleteList = new LinkedList; //creates new Linked List

  deleteList.addNode("Math", 25); //adds first ('head') node
  deleteList.addNode("Science", 75); //adds additional nodes
  deleteList.addNode("English", 36); //adds additional nodes
  deleteList.addNode("Phys Ed", 97); //adds additional nodes

  deleteList.firstNode();
  deleteList.deleteNode();
  expect(deleteList.head.show()).toBe('Science 75');
  expect(deleteList.previous).toBe(null);
  expect(deleteList.current).toBe(deleteList.head);
  expect(deleteList.current.forwardNode.show()).toBe('English 36');

  deleteList.nextNode();
  deleteList.deleteNode();
  expect(deleteList.current.show()).toBe('Phys Ed 97');
  expect(deleteList.previous.show()).toBe('Science 75');
  expect(deleteList.current.forwardNode).toBe(null);

  deleteList.addNode("Construction", 64);
  deleteList.deleteNode();
  expect(deleteList.current.show()).toBe('Phys Ed 97');
  expect(deleteList.previous.show()).toBe('Science 75');
  expect(deleteList.current.forwardNode).toBe(null);
});

test('Tests the total() method of LinkedList, which adds the amount from all the nodes', () => {
  let totalList = new LinkedList; //creates new Linked List

  totalList.addNode("Math", 25); //adds first ('head') node
  totalList.addNode("Science", 75); //adds additional nodes
  totalList.addNode("English", 36); //adds additional nodes
  totalList.addNode("Phys Ed", 97); //adds additional nodes

  expect(totalList.total()).toBe(233);

  let newTotal = new LinkedList; //creates new Linked List

  newTotal.addNode("Math", 5); //adds first ('head') node
  newTotal.addNode("Science", 10); //adds additional nodes
  newTotal.addNode("English", 15); //adds additional nodes
  newTotal.addNode("Phys Ed", 20); //adds additional nodes

  expect(newTotal.total()).toBe(50);
  expect(newTotal.current.show()).toBe('Phys Ed 20')
  expect(newTotal.previous.show()).toBe('English 15')
});
