/**
 * @description 첫 번째 매개변수인 리스트에서 두 번째 매개변수인 리스트에 없는 모든 항목을 찾아서 새로운 리스트를 반환한다.
 * @param {Function} fn
 * @param {Array} listA
 * @param {Array} listB
 * @returns {Array}
 */
export const differenceBy = (fn, listA, listB) => {
  const bIndex = indexBy(fn, listB);
  return listA.filter((val) => !bIndex[fn(val)]);
};
