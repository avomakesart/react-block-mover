const maxLimit = 35;
const minLimit = -35;

export const distanceLimit = (distance: any) => {
  if (distance < minLimit) return minLimit;
  if (distance > maxLimit) return maxLimit;

  return distance;
};
