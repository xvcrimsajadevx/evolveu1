import LinkNode from './LinkNode';

test('Testing LinkNode Class constructor', () => {
  let testNode = new LinkNode('Math', 25);
  expect(testNode.forwardNode).toBe(null);
  expect(testNode.subject).toBe('Math')
  expect(testNode.amount).toBe(25);

  let newNode = new LinkNode('Science', 57);
  expect(newNode.forwardNode).toBe(null);
  expect(newNode.subject).toBe('Science')
  expect(newNode.amount).toBe(57);
});

test('Tests the Show method of the LinkNode class', () =>{
  let testNode = new LinkNode('Math', 25);
  expect(testNode.show()).toBe("Math 25")

  let newNode = new LinkNode('Science', 57);
  expect(newNode.show()).toBe("Science 57")
})
