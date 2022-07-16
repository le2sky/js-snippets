/**
 * 평가 함수가 주어지면 오름차순으로 비교하는 함수를 반환한다.
 * @param {Function} fn
 * @returns {number}
 */
export const ascending = (fn) => (a, b) => {
  const valA = fn(a);
  const valB = fn(b);
  return valA < valB ? -1 : valA > valB ? 1 : 0;
};
