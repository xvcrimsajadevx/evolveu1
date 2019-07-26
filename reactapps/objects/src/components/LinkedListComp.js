import React, {Component} from 'react';
import LinkedList from './LinkedList';
import ArrayQueue from './ArrayQueue';
import PreviousActive from './PreviousActive';
import NextActive from './NextActive';
import './linkedlist.css';

const newList = new LinkedList();
newList.addNode("Math", 25); //adds first ('head') node
newList.addNode("Science", 75); //adds additional nodes
newList.addNode("English", 36); //adds additional nodes
newList.addNode("Phys Ed", 97); //adds additional nodes

const queue = [];
const listQueue = new ArrayQueue(queue);
listQueue.addNode('Pencil');
listQueue.addNode('Paper');
listQueue.addNode('Pen');
listQueue.addNode('Eraser');
listQueue.addNode('Folder');

class LinkedListComp extends Component {
  constructor() {
    super()
    this.state = {
      previous: newList.previous,
      current: newList.current,
      next: null,
      listItem: '',
    }
    this.textChange = this.textChange.bind(this);
  }

  handleChange = () => {
    this.setState({
      previous: newList.previous,
      current: newList.current,
    })

    newList.current === null ?
    this.setState({ next: null }) :
    this.setState({ next: newList.current.forwardNode })
  }

  addNode = () => {
    let subject = prompt('Enter a subject');
    let amount = Number(prompt('Enter your score'));

    this.state.next !== null ?
    newList.insertNode(subject, amount) :
    newList.addNode(subject, amount)

    this.handleChange();
  }

  stepForward = () => { newList.nextNode(); this.handleChange() }
  stepBack = () => { newList.previousNode(); this.handleChange() }
  firstNode = () => { newList.firstNode(); this.handleChange() }
  lastNode = () => { newList.lastNode(); this.handleChange() }

  deleteNode = () => {
    newList.deleteNode();
    this.handleChange();
  }

  // LIFO/FIFO

  queueTimer = (queueOrder) => {
    let timer = 100;

    let refreshState = () => {
      this.setState({listItem: ''});
    }

    for (var i = 1; i <= listQueue.queue.length; ++i) {
      setTimeout(function(queueOrder, efreshState){
        queueOrder();
        refreshState();
      }, timer, queueOrder, refreshState);

      timer = timer + 1000;
    };
  }

  lifo = () => {
    let queueOrder = listQueue.lifo;
    this.queueTimer(queueOrder)
  }

  fifo = () => {
    let queueOrder = listQueue.fifo;
    this.queueTimer(queueOrder)
  }

  listItem = (item, itemKey) => {
    const listNode = <li key={ itemKey }>{ item.show() }</li>;
    return listNode;
  }

  addItem = () => {
    if ( this.state.listItem !== "") {
      listQueue.addNode(this.state.listItem);
      this.setState({ listItem: '' });
    }
  }

  textChange = (event) => {
    const { id, value } = event.target

    this.setState({
      [id]: value
    })
  }

  render() {
    let previous = this.state.previous;
    let current = this.state.current;
    let next = this.state.next;

    return(
      <div>

        <h2>Linked List</h2>

        { previous === null ?
          <i className="fas fa-angle-double-left inactive" /> :
          <i className="fas fa-angle-double-left active" onClick = { this.firstNode } />
        }

        { previous === null ? "":
          <PreviousActive list = { newList } backStep = { this.stepBack } />
        }

        { (current === null) ? <div>You have no nodes</div> :
        <div className='onStep'>
          <span>{ current.show() }</span>
          <button onClick={ () => {this.deleteNode()} }>Delete Node</button>
        </div> }

        { (next === null || next === undefined) ? "":
          <NextActive list = { newList } forwardStep = { this.stepForward } />
        }

        { (next === null || next === undefined) ?
          <i className="fas fa-angle-double-right inactive" /> :
          <i className="fas fa-angle-double-right active" onClick = { this.lastNode } />
        }

        <br />

        <button onClick={ () => {this.addNode()} }>Add Node</button>

        <br />
        <span>Total: { newList.total() }</span>

        <hr />
        <h3>LIFO/FIFO</h3>

        <input type='text' id='listItem' onChange={ this.textChange } value={ this.state.listItem }/>
        <button onClick={ () => this.addItem() }>Add Item</button><br />
        <span>Queue List:</span>
        { listQueue.queue.length === 0 ? <ul><li>You do not have any items in your queue</li></ul> :
          <ol>
            { listQueue.queue.map(this.listItem) }
          </ol>
        }
        <button onClick={ () => this.lifo() }>LIFO</button> | <button onClick={ () => this.fifo() }>FIFO</button>
      </div>
    )
  }
}

export default LinkedListComp;
