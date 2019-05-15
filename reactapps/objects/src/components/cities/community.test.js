import Community from './Community';
import City from './City'
import { cities } from './citiesData';

const community = new Community(cities);

test('Tests Community constructor, which contains an array "cities" where city data will be stored', () => {
  expect(community.cities).toEqual([]);

  // console.log("Tests Community constructor:", cities);
});

test('Test createCity() method, which will create a new City', () => {
  let name = 'Calgary';
  let latitude = 75;
  let longitude = 105;
  let population = 2500;

  expect(community.createCity(name, latitude, longitude, population)).toBe(cities);
  expect(community.createCity('Edmonton', 80, 103, 2560)).toBe(cities);
  expect(community.createCity('Sudbury', 107, 70, 250)).toBe(cities);

  expect(community.cities[0]).toBeInstanceOf(City);
  expect(community.cities[1]).toBeInstanceOf(City);
  expect(community.cities[2]).toBeInstanceOf(City);

  // console.log("Test createCity():", community.cities[0]);
  // console.log("Test createCity():", community.cities[1]);
  // console.log("Test createCity():", community.cities[2]);
});

test('Test deleteCity() method, which will delete the first existing City', () => {
  let city = community.cities[0];

  // Written twice to insure full coverage
  expect(community.deleteCity(city)).toBe(community.cities);
  expect(community.deleteCity(city)).toBe(community.cities);

  expect(community.cities).toEqual(cities);

  // console.log("Test first deleteCity():", cities)
});

test('Test deleteCity() method, which will delete the second existing City', () => {
  let city = community.cities[1];

  // Written twice to insure full coverage
  expect(community.deleteCity(city)).toBe(community.cities);
  expect(community.deleteCity(city)).toBe(community.cities);

  expect(community.cities).toEqual(cities);

  // console.log("Test second deleteCity():", cities)
});

test('Test whichSphere() method, which returns whether a city is in the Northern or Southern hemishpere', () => {
  //Returns 'North' if latitude os greater than 0
  const tempCity1 = new City("Calgary", 75, 105, 2500);
  expect(community.whichSphere(tempCity1)).toBe('North');
  console.log(`Test whichSphere() North: ${tempCity1.name} is ${community.whichSphere(tempCity1)}`);

  //Returns 'South' if latitude os less than 0
  const tempCity2 = new City("Edmonton", -75, 105, 2500);
  expect(community.whichSphere(tempCity2)).toBe('South');
  console.log(`Test whichSphere() South: ${tempCity2.name} is ${community.whichSphere(tempCity2)}`);

  //Returns 'On Equator' if latitude equals 0
  const tempCity3 = new City("Sudbury", 0, 105, 2500);
  expect(community.whichSphere(tempCity3)).toBe('On Equator');
  console.log(`Test whichSphere() On Equator: ${tempCity3.name} is ${community.whichSphere(tempCity3)}`);
});

test('Test getMostNorth() method, which loops through cities and returns the city with the highest (most North) latitude', () => {
  //More cities added for better coverage
  community.createCity('Calgary', -25, 103, 2560);
  community.createCity('Sudbury', 0, 70, 250);
  community.createCity('Sidney', 90, 103, 2560);
  community.createCity('The Ether', -67, 70, 250);

  let expected = cities.reduce(function (a, b) { return b.latitude < a.latitude ? a : b });

  expect(community.getMostNorth()).toBe(expected);
});

test('Test getMostSouth() method, which loops through cities and returns the city with the lowest (most South) latitude', () => {
  let expected = cities.reduce(function (a, b) { return b.latitude > a.latitude ? a : b });

  expect(community.getMostSouth()).toBe(expected);
});
