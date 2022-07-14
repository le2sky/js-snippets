import groupBy from "./groupBy";

/**
 * @description keying-function에 따라 관련 항목을 포함하는 하위 목록을 만든다.
 * @param {Function} fn
 * @param {Array} list
 * @returns {Array}
 */
export const collectBy = (fn, list) => Object.values(groupBy(fn, list));
