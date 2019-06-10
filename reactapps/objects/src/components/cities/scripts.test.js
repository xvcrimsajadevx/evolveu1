import scripts from './scripts';
import City from './City'

test('Tests UI display of latitude', () => {
  let testCity1 = new City("Calgary", 75, 105, 2500);
  let testCity2 = new City("Edmonton", -67, 85, 14200);
  let testCity3 = new City("Sudbury", 0, 90, 27);

  expect(scripts.latitude(testCity1)).toBe('75°N');
  expect(scripts.latitude(testCity2)).toBe('67°S');
  expect(scripts.latitude(testCity3)).toBe('0°');
});

test('Tests UI display of longitude', () => {
  let testCity1 = new City("Calgary", 75, 105, 2500);
  let testCity2 = new City("Edmonton", 67, -85, 14200);
  let testCity3 = new City("Sudbury", 27, 0, 27);

  expect(scripts.longitude(testCity1)).toBe('105°E');
  expect(scripts.longitude(testCity2)).toBe('85°W');
  expect(scripts.longitude(testCity3)).toBe('0°');
});

test('Tests UI display of findHemisphere', () => {
  let testCity1 = new City("Calgary", 75, 105, 2500);
  let testCity2 = new City("Edmonton", -67, 85, 14200);
  let testCity3 = new City("Sudbury", 27, -45, 27);
  let testCity4 = new City("Calgary", -75, -105, 2500);
  let testCity5 = new City("Edmonton", 0, 85, 14200);
  let testCity6 = new City("Sudbury", 0, -95, 27);
  let testCity7 = new City("Calgary", 75, 0, 2500);
  let testCity8 = new City("Edmonton", -67, 0, 14200);
  let testCity9 = new City("Sudbury", 0, 0, 27);

  expect(scripts.findHemisphere(testCity1)).toBe('North Eastern');
  expect(scripts.findHemisphere(testCity2)).toBe('South Eastern');
  expect(scripts.findHemisphere(testCity3)).toBe('North Western');
  expect(scripts.findHemisphere(testCity4)).toBe('South Western');
  expect(scripts.findHemisphere(testCity5)).toBe('Equatorial East');
  expect(scripts.findHemisphere(testCity6)).toBe('Equatorial West');
  expect(scripts.findHemisphere(testCity7)).toBe('North Meridian');
  expect(scripts.findHemisphere(testCity8)).toBe('South Meridian');
  expect(scripts.findHemisphere(testCity9)).toBe('Equatorial Meridian');
});
