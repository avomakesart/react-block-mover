import { distanceLimit } from './distanceLimit';

describe('util/distanceLimit', () => {
  test('should reach to the distance max limit', () => {
    const maxDistance = distanceLimit(350);
    expect(maxDistance).toBeGreaterThanOrEqual(35);
  });

  test('should reach to the distance min limit', () => {
    const minDistance = distanceLimit(-350);
    expect(minDistance).toBeLessThanOrEqual(-35);
  });
});
