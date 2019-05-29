import React from 'react';
import scripts from './scripts';

const CitiesTable = (props) => {
  let cities = props.cities;
  let setModal = props.setModal;

  return(
    <table className='citiesTable'>
      <thead>
        <tr>
          <th className='col1'>Name</th>
          <th className='col2'>Latitude</th>
          <th className='col3'>Longitude</th>
          <th className='col4'>Population</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, cityID) => {
          return (
            <tr onClick={(e) => setModal(e, city.cityID)} id='displayCity' key={cityID}>
              <td className='col1'>{city.name}</td>
              <td className='col2'>{scripts.latitude(city)}</td>
              <td className='col3'>{scripts.longitude(city)}</td>
              <td className='col4'>{city.population}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default CitiesTable;
