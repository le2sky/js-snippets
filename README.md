# useful-js-snippets

> 유용한 자바스크립트 코드 조각들을 모아 놓았습니다.

## TOC

1. [Reference](#reference)
2. [Snippets usage](#snippets-usage)

   - [Get Value](#get-value)
   - [Clamp](#clamp)
   - [Sleep](#sleep)
   - [Group By](#group-by)
   - [Collect By](#collect-by)
   - [Head](#head)
   - [Tail](#tail)
   - [Flatten](#flatten)
   - [Intersection By](#intersection-by)
   - [Index By](#index-by)
   - [Difference By](#difference-by)
   - [Recover With](#recover-with)
   - [Distance](#distance)
   - [Drop While](#drop-while)
   - [Sum By](#sum-by)
   - [Ascending](#ascending)
   - [Descending](#descending)
   - [Find Key](#find-key)
   - [Bifurcate](#bifurcate-by)
   - [Pipe](#pipe)
   - [isVaildJSON](#isvalidjson)
   - [isVaildDate](#isvaliddate)
   - [Memoization](#memoization)
   - [Curry](#curry)

## Reference

- Henrik Larsen Toft's
  [20 JavaScript snippets that will make you a better developer](https://levelup.gitconnected.com/20-javascript-snippets-that-will-make-you-a-better-developer-68dfe4bf5019)
- Angelos Chalaris' [30 seconds of code](https://www.30secondsofcode.org/)
- [modern javascript tutorial](https://ko.javascript.info/)

## Snippets usage

#### Get Value

함수는 지정된 경로의 값을 반환하고, 값이 없으면 null을 반환합니다.

```js
getValue({ a: { b: { c: "d" } } }, "a.b.c"); // = d
```

| Function   | Parameter                     | Description                                             |
| :--------- | :---------------------------- | :------------------------------------------------------ |
| `getValue` | obj: `object`, path: `string` | 유효한 경로라면 값을 리턴하고 아니면 null을 리턴합니다. |

---

#### clamp

값이 지정된 범위 내에 있는지 확인하고, 지정된 범위에 값이 없다면 최소값과 최대값에 가장 가까운 값을 반환(클램프)합니다.

```js
clamp(0, 10, -5); // = 0
```

| Function | Parameter                                    | Description                                             |
| :------- | :------------------------------------------- | :------------------------------------------------------ |
| `clamp`  | min: `number`, max: `number`, value:`number` | 주어진 값을 리턴하거나 최소값 혹은 최대값을 리턴합니다. |

---

#### Sleep

다음 작업을 수행하기 전에 지정된 기간(밀리초)을 기다립니다.

```js
await sleep(1000); // waits 1 sec
```

| Function | Parameter          | Description                    |
| :------- | :----------------- | :----------------------------- |
| `sleep`  | duration: `number` | 주어진 기간동안 딜레이 됩니다. |

---

#### Group By

keying-function에 따라 개체의 관련 항목을 그룹화하고 색인화합니다.

```js
groupBy(
  (vehicle) => vehicle.make,
  [
    { make: "tesla", model: "3" },
    { make: "tesla", model: "y" },
    { make: "ford", model: "mach-e" },
  ]
);
// {
//   tesla: [ { make: 'tesla', ... }, { make: 'tesla', ... } ],
//   ford: [ { make: 'ford', ... } ],
```

| Function  | Parameter                   | Description                 |
| :-------- | :-------------------------- | :-------------------------- |
| `groupBy` | fn:`Function` list: `Array` | 그룹화된 객체를 반환합니다. |

---

#### Collect By

keying-function에 따라 관련 항목을 포함하는 하위 리스트를 만듭니다.

```js
collectBy(
  (vehicle) => vehicle.make,
  [
    { make: "tesla", model: "3" },
    { make: "tesla", model: "y" },
    { make: "ford", model: "mach-e" },
  ]
);

// [
//   [ { make: 'tesla', ... }, { make: 'tesla', ... } ],
//   [ { make: 'ford', ... } ],
// ]
```

| Function    | Parameter                   | Description                      |
| :---------- | :-------------------------- | :------------------------------- |
| `collectBy` | fn:`Function` list: `Array` | **groupBy에 의존성이 있습니다.** |

---

#### Head

리스트의 첫 번째 요소를 가져옵니다. 이 함수는 깨끗하고 읽기 쉬운 코드를 작성하는 데 유용합니다.

```js
head([1, 2, 3]); // = 1
head([]); // = undefined
```

| Function | Parameter     | Description                                    |
| :------- | :------------ | :--------------------------------------------- |
| `head`   | list: `Array` | 첫번째 값을 리턴하거나 undefiend를 리턴합니다. |

---

#### Tail

리스트의 첫 번째 요소를 제외한 모든 요소를 ​​가져옵니다. 이 함수는 깨끗하고 읽기 쉬운 코드를 작성하는 데 유용합니다.

```js
tail([1, 2, 3]); // = [2, 3]
tail([]); // = []
```

| Function | Parameter     | Description                                       |
| :------- | :------------ | :------------------------------------------------ |
| `tail`   | list: `Array` | 첫 번째 요소를 제외한 나머지의 배열을 리턴합니다. |

#### Flatten

중첩된 하위 리스트에서 모든 항목을 재귀적으로 가져와서 플랫 리스트를 만듭니다.

```js
flatten([[1, 2, [3, 4], 5, [6, [7, 8]]]]); // = [1, 2, 3, 4, 5, 6, 7, 8]
```

| Function  | Parameter     | Description                                     |
| :-------- | :------------ | :---------------------------------------------- |
| `flatten` | list: `Array` | 다차원 배열을 입력받아 1차원 배열을 리턴합니다. |

---

#### Intersection By

keying-function에 의해 정의된 대로 두 목록에 존재하는 모든 값을 찾습니다. (교집합)

```js
intersectionBy((v) => v, [1, 2, 3], [2, 3, 4]); // = [2, 3]
intersectionBy(
  (v) => v.a,
  [{ a: 1 }, { a: 2 }],
  [{ a: 2 }, { a: 3 }, { a: 4 }]
); // = [{ a: 2 }];
```

| Function         | Parameter                                    | Description               |
| :--------------- | :------------------------------------------- | :------------------------ |
| `intersectionBy` | fn: `Function` listA: `Array` listB: `Array` | 교집합 배열을 리턴합니다. |

---

#### Index By

keying-function에 의해 `결정된 값`으로 리스트의 각 요소를 인덱싱합니다.

```js
indexBy((val) => val.a, [{ a: 1 }, { a: 2 }, { a: 3 }]);
// = { 1: { a: 1 }, 2: { a:2 }, 3: { a: 3 } }
```

| Function  | Parameter                    | Description                 |
| :-------- | :--------------------------- | :-------------------------- |
| `indexBy` | fn: `Function` list: `Array` | 인덱스된 객체를 반환합니다. |

---

#### Difference By

첫 번째 매개변수인 리스트에서 두 번째 매개변수인 리스트에 없는 모든 항목을 찾아서 새로운 리스트를 반환합니다.

> keying-function에 의해 결정됩니다.

```js
differenceBy((val) => val, [1, 2, 3], [3, 4, 5]); // = [1,2]
differenceBy(
  (vehicle) => vehicle.make,
  [{ make: "tesla" }, { make: "ford" }, { make: "gm" }],
  [{ make: "tesla" }, { make: "bmw" }, { make: "audi" }]
); // = [{ make: 'ford' }, { make: 'gm' }]
```

| Function       | Parameter                                    | Description               |
| :------------- | :------------------------------------------- | :------------------------ |
| `differenceBy` | fn: `Function` listA: `Array` listB: `Array` | **indexBy에 의존합니다.** |

---

#### Recover With

주어진 함수에서 오류가 발생하면 기본값을 반환합니다.

```js
recoverWith("A", (val) => val, "B"); // = B
recoverWith("A", () => {
  throw new Error();
}); // = 'A'
```

| Function      | Parameter                          | Description                                                      |
| :------------ | :--------------------------------- | :--------------------------------------------------------------- |
| `recoverWith` | defaultValue: `any` fn: `Function` | 두 번째 매개변수 이후의 매개변수는 주어진 함수의 매개변수입니다. |

---

#### Distance

두 점 p1과 p2 사이의 유클리드 거리를 계산합니다. (두 점사이의 거리 계산)

```js
distance([0, 1], [5, 4]); // = 5.8309518948453
```

| Function   | Parameter                               | Description           |
| :--------- | :-------------------------------------- | :-------------------- |
| `distance` | p1: `Array<number>` p2: `Array<number>` | 두 점사이의 거리 계산 |

---

#### Drop While

첫 번째 요소에서부터 시작하여 조건 함수가 충족될 때까지 목록에서 요소를 삭제합니다.

```js
dropWhile((val) => val < 5, [1, 2, 3, 4, 5, 6, 7]); // = [5,6,7]
```

| Function    | Parameter                      | Description        |
| :---------- | :----------------------------- | :----------------- |
| `dropWhile` | pred: `Function` list: `Array` | 배열을 리턴합니다. |

---

#### Sum By

각 요소의 개별 값을 발행하는 함수가 주어지면 리스트에 있는 모든 요소의 합을 계산합니다.

```js
sumBy(
  (product) => product.price,
  [
    { name: "pizza", price: 10 },
    { name: "pepsi", price: 5 },
    { name: "salad", price: 5 },
  ]
); // = 20
```

| Function | Parameter                    | Description                  |
| :------- | :--------------------------- | :--------------------------- |
| `sumBy`  | fn: `Function` list: `Array` | 총합(`number`)을 리턴합니다. |

---

#### Ascending

평가 함수가 주어지면 오름차순으로 비교하는 함수를 만듭니다.

```js
const byPrice = ascending((val) => val.price);
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice);
// = [{ price: 100 }, { price: 200 }, { price: 300 }]
```

| Function    | Parameter      | Description                          |
| :---------- | :------------- | :----------------------------------- |
| `ascending` | fn: `Function` | 평가함수는 비교할 속성을 반환합니다. |

---

#### Descending

평가 함수가 주어지면 내림차순으로 비교하는 함수를 만듭니다.

```js
const byPrice = descending((val) => val.price);
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice);
// = [{ price: 300 }, { price: 200 }, { price: 100 }]
```

| Function     | Parameter      | Description                          |
| :----------- | :------------- | :----------------------------------- |
| `descending` | fn: `Function` | 평가함수는 비교할 속성을 반환합니다. |

---

#### Find Key

인덱스 내에서 주어진 조건을 만족하는 첫 번째 키를 반환합니다.

```js
findKey((car) => !car.available, {
  tesla: { available: true },
  ford: { available: false },
  gm: { available: true },
}); // = "ford"
```

| Function  | Parameter                              | Description                            |
| :-------- | :------------------------------------- | :------------------------------------- |
| `findKey` | predicate: `Function`, index: `Object` | 만족하는 첫 번째 키 이름을 반환합니다. |

---

#### Bifurcate By

주어진 리스트의 값을 두 개의 리스트으로 나눕니다. 하나는 평가 함수가 참으로 평가되는 값을 포함하고 또 다른 리스트는 거짓인 값들을 포함합니다.

```js
bifurcateBy((val) => val > 0, [-1, 2, -3, 4]);
// = [[2, 4], [-1, -3]]
```

| Function      | Parameter                            | Description              |
| :------------ | :----------------------------------- | :----------------------- |
| `bifurcateBy` | predicate: `Function`, list: `Array` | 2차원 배열을 리턴합니다. |

---

#### Pipe

왼쪽에서 오른쪽으로 함수 합성을 수행합니다. 첫 함수의 결과는 두 번째 함수에 전달되고 두 번째 결과는 세 번째 함수에 전달되는 식으로 모든 기능이 처리될 때까지 계속됩니다.

```js
pipe([Math.abs, Math.floor, (val) => -val], 4.2); // = -4
pipe([(a, b) => a - b, Math.abs], 5, 10); // = 5
```

| Function | Parameter                               | Description             |
| :------- | :-------------------------------------- | :---------------------- |
| `pipe`   | functions: `Array<Function>`, [args...] | 함수 합성을 수행합니다. |

---

#### isValidJSON

주어진 JSON 문자열이 유효한지 판단합니다.

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

| Function      | Parameter     | Description                        |
| :------------ | :------------ | :--------------------------------- |
| `isValidJSON` | str: `string` | JSON 문자열이 유효한지 검사합니다. |

---

### isValidDate

주어진 매개변수가 유효한 `date` 값인지 판단합니다.

```js
isValidDate("December 17, 1995 03:24:00"); // true
isValidDate("1995-12-17T03:24:00"); // true
isValidDate("1995-12-17 T03:24:00"); // false
isValidDate("Duck"); // false
isValidDate(1995, 11, 17); // true
isValidDate(1995, 11, 17, "Duck"); // false
isValidDate({}); // false
```

| Function      | Parameter | Description                                   |
| :------------ | :-------- | :-------------------------------------------- |
| `isValidDate` | [args..]  | 주어진 매개변수가 유효한 date인지 확인합니다. |

---

### Memoization

memoization 테크닉을 이용해서 시간이 오래 걸리는 함수의 결과를 미리 저장합니다.

```js
const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i++) fibonacci(30); // ~5000ms
for (let i = 0; i < 100; i++) memoizedFibonacci(30); // ~50ms
```

| Function  | Parameter      | Description                        |
| :-------- | :------------- | :--------------------------------- |
| `memoize` | fn: `Function` | 주어진 함수의 결과를 저장해둡니다. |

---

### Curry

다중 인자를 가진 함수를 커링된 함수로 변환합니다.

```js
let curriedSum = curry(sum);

curriedSum(1, 2, 3); // 6
curriedSum(1)(2, 3); // 6
curriedSum(1)(2)(3); // 6
```

| Function | Parameter      | Description               |
| :------- | :------------- | :------------------------ |
| `curry`  | fn: `Function` | 주어진 함수를 커링합니다. |

---
