import ListNode from './ListNode';

test('Tests the ListNode Class constructor', () => {
  let testNode = new ListNode('Pencil');
  expect(testNode).toBeInstanceOf(ListNode);
  expect(testNode.item).toBe('Pencil');

  let otherNode = new ListNode('Eraser');
  expect(otherNode).toBeInstanceOf(ListNode);
  expect(otherNode.item).toBe('Eraser');
})

test('Tests the Show method of the ListNode class', () => {
  let testNode = new ListNode('Pencil');
  expect(testNode.show()).toBe("Pencil");

  let otherNode = new ListNode('Eraser');
  expect(otherNode.show()).toBe("Eraser");
})
