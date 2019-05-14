import community from './community';
import City from './City'

test('Test whichSphere() method, which returns whether a city is in the Northern or Southern hemishpere', () => {
  //Returns 'North' if latitude os greater than 0
  const tempCity1 = new City("Calgary", 75, 105, 2500);
  expect(community.whichSphere(tempCity1)).toBe('North');

  //Returns 'South' if latitude os less than 0
  const tempCity2 = new City("Calgary", -75, 105, 2500);
  expect(community.whichSphere(tempCity2)).toBe('South');

  //Returns 'On Equator' if latitude equals 0
  const tempCity3 = new City("Calgary", 0, 105, 2500);
  expect(community.whichSphere(tempCity3)).toBe('On Equator');
});
