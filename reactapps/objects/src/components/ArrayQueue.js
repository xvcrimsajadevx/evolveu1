import ListNode from './ListNode';

export default class ArrayQueue {
  constructor (queue) {
    this.queue = queue;
  }

  addNode = (item) => {
    let listItem = new ListNode(item);

    this.queue.push(listItem)
    return this.queue;
  }

  lifo = () => {
    this.queue.pop();

    return this.queue;
  }

  fifo = () => {
    this.queue.shift();

    return this.queue;
  }

}
