/**
 * @description 중첩된 하위 리스트에서 모든 항목을 재귀적으로 가져와서 플랫 리스트를 만든다.
 * @param {Array} list
 * @returns {Array}
 */

export const flatten = (list) =>
  list.reduce(
    (prev, next) => [
      ...prev,
      ...(Array.isArray(next) ? flatten(next) : [next]),
    ],
    []
  );
