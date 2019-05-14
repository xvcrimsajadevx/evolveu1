export default class City {
  constructor(name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude= longitude;
    this.population = population;
  }

  show = () => {
    return `Name: ${this.name} Latitude: ${this.latitude} Longitude: ${this.longitude} Population: ${this.population}`;
  }

  moveIn = (people) => {
    return this.population = this.population + people;
  }

  moveOut = (people) => {
    return this.population = this.population - people;
  }

  howBig = () => {
    if (this.population >= 100000) {
      return `${this.name} is a city.`;
    } else if (this.population >= 20000 && this.population < 100000) {
      return `${this.name} is a large town.`;
    } else if (this.population >= 1000 && this.population < 20000) {
      return `${this.name} is a town.`;
    } else if (this.population > 100 && this.population < 1000) {
      return `${this.name} is a village.`;
    } else if (this.population > 1 && this.population <= 100) {
      return `${this.name} is a hamlet.`;
    } else if (this.population === 0) {
      return `${this.name} is a ghost town.`;
    } else {
      return "";
    }
  }

}
