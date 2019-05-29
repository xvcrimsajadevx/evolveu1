import React from 'react';
import CitiesTable from './CitiesTable';

const CitiesDisplay = (props) => {
  let community = props.community;
  let setModal = props.setModal;
  let cities = community.cities;

  let northCities = cities.filter( city => (community.whichSphere(city) === 'North') )
  let equatorCities = cities.filter( city => (community.whichSphere(city) === 'On Equator') )
  let southCities = cities.filter( city => (community.whichSphere(city) === 'South') )

  return(
    <div className='citiesDisplay'>
    { cities.length === 0 ? <h3>You have no cities to display</h3> : <div>
      { northCities.length === 0 ? "" :
        <div>
          <h3>Northern Hemisphere</h3>
          <CitiesTable
            cities = {northCities}
            setModal = {setModal}
          />

          <span className='totalDisplay'>Total Northern Population: {community.getPopulation(northCities)}</span>

          <br />
        </div>
      }

      { equatorCities.length === 0 ? "" :
        <div>
          <h3>On Equator</h3>
          <CitiesTable
            cities = {equatorCities}
            setModal = {setModal}
          />
          <span className='totalDisplay'>Total Equatorial Population: {community.getPopulation(equatorCities)}</span>
          <br />
        </div>
      }

      { southCities.length === 0 ? "" :
        <div>
          <h3>Southern Hemisphere</h3>
          <CitiesTable
            cities = {southCities}
            setModal = {setModal}
          />
          <span className='totalDisplay'>Total Southern Population: {community.getPopulation(southCities)}</span>

          <br />
        </div>
      }
    </div>}
    </div>
  )
}

export default CitiesDisplay;
