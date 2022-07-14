/**
 * @description keying-function에 따라 개체의 관련 항목을 그룹화하고 색인화한다.
 * @param { Function } fn
 * @param { Array } list
 * @returns { Array }
 */
export const groupBy = (fn, list) =>
  list.reduce(
    (prev, next) => ({
      ...prev,
      [fn(next)]: [...(prev[fn(next)] || []), next],
    }),
    {}
  );
