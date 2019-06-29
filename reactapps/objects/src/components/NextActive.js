import React from 'react';

const NextActive = (props) => {
  let list = props.list;
  let forwardStep = props.forwardStep;

  return(
    <div className='offStep' onClick={() => forwardStep()}>
      <i className="fas fa-angle-right" />

      <div className='listDirection'>
        <h6>Next</h6>
        {list.current.forwardNode.show()}
      </div>

    </div>)
}

export default NextActive;
