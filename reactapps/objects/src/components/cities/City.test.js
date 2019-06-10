import City from './City';

test('Testing City class Constructor', () => {
  const tempCity = new City("Calgary", 75, 105, 2500);
  expect(tempCity.name).toBe('Calgary');
  expect(tempCity.latitude).toBe(75);
  expect(tempCity.longitude).toBe(105);
  expect(tempCity.population).toBe(2500);
});

test('Tests show() method, which returns the values of a City in a string', () => {
  const tempCity = new City("Calgary", 75, 105, 2500);
  expect(tempCity.show()).toBe('Name: Calgary Latitude: 75 Longitude: 105 Population: 2500');
});

test('Tests moveIn() method, which returns total population after people have been added', () => {
  const tempCity = new City("Calgary", 75, 105, 2500);
  expect(tempCity.moveIn(10)).toBe(2510);
})

test('Tests moveOut() method, which reduces total population after people have moved out', () => {
  const tempCity = new City("Calgary", 75, 105, 2500);
  expect(tempCity.moveOut(10)).toBe(2490);
});

test('Tests howBig() method, which returns the type of settlement based on size of population', () => {
  //Returns 'City' for a population greater than 100,000 people
  const tempCity1 = new City("Calgary", 75, 105, 150000);
  expect(tempCity1.howBig()).toBe('City');
  console.log(tempCity1.howBig())

  //Returns 'large town' for a population between 20,000 and 100,000 people
  const tempCity2 = new City("Calgary", 75, 105, 75000);
  expect(tempCity2.howBig()).toBe('Large Town');

  //Returns 'town' for a population between 1,000 and 20,000 people
  const tempCity3 = new City("Calgary", 75, 105, 2500);
  expect(tempCity3.howBig()).toBe('Town');

  //Returns 'village' for a population greater than 100 and smaller than 1000
  const tempCity4 = new City("Calgary", 75, 105, 720);
  expect(tempCity4.howBig()).toBe('Village');

  //Returns 'hamlet' for a population less than 100 and greater than 1
  const tempCity5 = new City("Calgary", 75, 105, 53);
  expect(tempCity5.howBig()).toBe('Hamlet');

  //Returns 'ghost town' for a settlement with 0 population
  const tempCity6 = new City("Calgary", 75, 105, 0);
  expect(tempCity6.howBig()).toBe('Ghost Town');

  //Returns an empty string for a population less than 0
  const tempCity7 = new City("Calgary", 75, 105, -30);
  expect(tempCity7.howBig()).toBe("");
});
