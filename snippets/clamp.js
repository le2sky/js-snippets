/**
 * @description 값이 지정된 범위 내에 있는지 확인하고, 지정된 범위에 값이 없다면 최소값과 최대값에 가장 가까운 값을 반환(클램프)한다.
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number | Error}
 */
export const clamp = (min, max, value) => {
  if (min > max) throw new Error("min cannot be greater than max");
  return value < min ? min : value > max ? max : value;
};
