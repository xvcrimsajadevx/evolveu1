import React from 'react';

const PreviousActive = (props) => {
  let list = props.list;
  let backStep = props.backStep;

  return(
    <div className='offStep' onClick={ () => backStep() } >
      <i className="fas fa-angle-left" />

      <div className='listDirection'>
        <h6>Previous</h6>
        {list.previous.show()}
      </div>

    </div>)
}

export default PreviousActive;
