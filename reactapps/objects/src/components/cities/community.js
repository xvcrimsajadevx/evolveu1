import City from './City';

const whichSphere = (city) => {
  if (city.latitude > 0 ) {
    return 'North';
  } else if (city.latitude < 0 ) {
    return 'South';
  } else {
    return 'On Equator';
  }
}


export default {whichSphere};
