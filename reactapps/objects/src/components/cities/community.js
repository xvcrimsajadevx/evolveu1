import City from './City';
import { cities } from './citiesData';

class Community {
  constructor(cities) {
    this.cities = cities;
  }

  createCity = (name, latitude, longitude, population) => {
    let city = new City(name, latitude, longitude, population);
    cities.push(city);

    return cities;
  }

  deleteCity = (cities, city) => {
    var index = cities.indexOf(city);

    if ( index > -1 ) {
      cities.splice(index, 1);
    }

    return cities;
  }

  whichSphere = (city) => {
    if (city.latitude > 0 ) {
      return 'North';
    } else if (city.latitude < 0 ) {
      return 'South';
    } else {
      return 'On Equator';
    }
  }



}

export default Community;
