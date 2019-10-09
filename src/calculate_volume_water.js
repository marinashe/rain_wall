export const calculateVolumeWater = (wall) => {
  let max = 0;
  const leftMax = wall.map(height => {
    if (height > max) {
      max = height;
    }
    return max;
  });
  max = 0;
  const rightMax = [...wall].reverse().map(height => {
    if (height > max) {
      max = height;
    }
    return max;
  })
  rightMax.reverse();
  let volume = 0;
  for (let i = 1; i < wall.length - 1; i++) {
    volume += Math.min(leftMax[i], rightMax[i]) - wall[i];
  }
  return volume;
}
