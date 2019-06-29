import ListNode from './ListNode';
import ArrayQueue from './ArrayQueue';

test('Tests the extantiation of the ArrayQueue class', () => {
  const queue = [];
  const newQueue = new ArrayQueue(queue);

  expect(newQueue).toBeInstanceOf(ArrayQueue);
  expect(newQueue.queue).toBeInstanceOf(Array);
})

test('Tests the addNode method of the ArrayQueue class', () => {
  const queue = [];
  const newQueue = new ArrayQueue(queue);
  newQueue.addNode('item');
  newQueue.addNode('other');
  newQueue.addNode('new');

  expect(newQueue.queue[0]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[0].show()).toBe('item');
  expect(newQueue.queue[1]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[1].show()).toBe('other');
  expect(newQueue.queue[2]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[2].show()).toBe('new');
})

test('Tests the lifo method of the ArrayQueue class', () => {
  const queue = [];
  const newQueue = new ArrayQueue(queue);
  newQueue.addNode('item');
  newQueue.addNode('other');
  newQueue.addNode('new');

  expect(newQueue.queue.length).toBe(3);

  newQueue.lifo();
  expect(newQueue.queue.length).toBe(2);
  expect(newQueue.queue[0]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[0].show()).toBe('item');
  expect(newQueue.queue[1]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[1].show()).toBe('other');
  expect(newQueue.queue[2]).toBe(undefined);

  newQueue.lifo();
  expect(newQueue.queue.length).toBe(1);
  expect(newQueue.queue[0]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[0].show()).toBe('item');
  expect(newQueue.queue[1]).toBe(undefined);
})

test('Tests the fifo method of the ArrayQueue class', () => {
  const queue = [];
  const newQueue = new ArrayQueue(queue);
  newQueue.addNode('item');
  newQueue.addNode('other');
  newQueue.addNode('new');

  expect(newQueue.queue.length).toBe(3);

  newQueue.fifo();
  expect(newQueue.queue.length).toBe(2);
  expect(newQueue.queue[0]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[0].show()).toBe('other');
  expect(newQueue.queue[1]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[1].show()).toBe('new');
  expect(newQueue.queue[2]).toBe(undefined);

  newQueue.fifo();
  expect(newQueue.queue.length).toBe(1);
  expect(newQueue.queue[0]).toBeInstanceOf(ListNode);
  expect(newQueue.queue[0].show()).toBe('new');
  expect(newQueue.queue[1]).toBe(undefined);

  newQueue.fifo();
  expect(newQueue.queue.length).toBe(0);
  newQueue.fifo();
  expect(newQueue.queue.length).toBe(0);
})
