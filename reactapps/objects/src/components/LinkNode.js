export default class LinkNode {
  constructor(subject, amount) {
    this.forwardNode = null;
    this.subject = subject;
    this.amount = amount;
  }

  show = () => {
    return `${this.subject} ${this.amount}`
  }
}
