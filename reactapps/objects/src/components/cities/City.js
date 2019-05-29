export default class City {
  constructor(name, latitude, longitude, population, cityID) {
    this.name = name;
    this.latitude = latitude;
    this.longitude= longitude;
    this.population = population;
    this.cityID = cityID
  }

  show = () => {
    return `Name: ${this.name} Latitude: ${this.latitude} Longitude: ${this.longitude} Population: ${this.population}`;
  }

  moveIn = (people) => {
    return this.population = Number(this.population) + Number(people);
  }

  moveOut = (people) => {
    return this.population = Number(this.population) - Number(people);
  }

  howBig = () => {
    if (this.population >= 100000) {
      return "City";
    } else if (this.population >= 20000 && this.population < 100000) {
      return "Large Town";
    } else if (this.population >= 1000 && this.population < 20000) {
      return "Town";
    } else if (this.population > 100 && this.population < 1000) {
      return "Village";
    } else if (this.population >= 1 && this.population <= 100) {
      return "Hamlet";
    } else if (this.population === 0) {
      return "Ghost Town";
    } else {
      return "";
    }
  }

}
