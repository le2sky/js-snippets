/**
 * @description 시간이 오래 걸리는 함수의 결과를 미리 캐싱합니다.
 * @param {Function} fn
 * @returns {any}
 */
export const memoize = (fn) =>
  new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argsList) {
      let cacheKey = argsList.toString();
      if (!this.cache.has(cacheKey))
        this.cache.set(cacheKey, target.apply(thisArg, argsList));
      return this.cache.get(cacheKey);
    },
  });
