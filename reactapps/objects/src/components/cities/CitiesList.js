import React from 'react';
import CitiesDisplay from './CitiesDisplay';

const CitiesList = (props) => {
  let community = props.community;
  let setModal = props.setModal;

  return(
    <div className='citiesList'>
      <CitiesDisplay
        community = {community}
        setModal = {setModal}
      />
    </div>
  )
}

export default CitiesList;
