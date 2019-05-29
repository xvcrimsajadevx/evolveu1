import City from './City';
import { cities } from './citiesData';

class Community {
  constructor(cities) {
    this.cities = cities;
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

  getMostNorth = () => {
    let mostNorthern = cities.reduce(function (a, b) { return a.latitude > b.latitude ? a : b });

    return mostNorthern;
  }

  getMostSouth = () => {
    let mostSouthern = cities.reduce(function (a, b) { return b.latitude > a.latitude ? a : b });

    return mostSouthern;
  }

  getPopulation = (cities) => {
    let totalPopulation = cities.reduce((accumulator, currentValue) => (accumulator + currentValue.population), 0);

    return totalPopulation;
  }

  createCity = (name, latitude, longitude, population, cityID) => {
    let city = new City(name, latitude, longitude, population, cityID);
    cities.push(city);

    return cities;
  }

  deleteCity = (city) => {
    var index = cities.indexOf(city);

    if ( index > -1 ) {
      cities.splice(index, 1);
    }

    return cities;
  }

}

export default Community;
