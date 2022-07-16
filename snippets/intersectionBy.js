/**
 * @description keying-function에 의해 정의된 대로 두 목록에 존재하는 모든 값을 찾는다. (교집합)
 * @param {Function} fn
 * @param {Array} listA
 * @param {Array} listB
 * @returns {Array}
 *
 */
export const intersectionBy = (fn, listA, listB) => {
  const b = new Set(listB.map(fn));
  return listA.filter((val) => b.has(fn(val)));
};
