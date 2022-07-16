/**
 * @description 두 점 p1과 p2 사이의 유클리드 거리를 계산한다.
 * @param {Array<number>} param0
 * @param {Array<number>} param1
 * @returns {number}
 */

export const distance = ([x0, y0], [x1, y1]) => Math.hypot(x1 - x0, y1 - y0);
