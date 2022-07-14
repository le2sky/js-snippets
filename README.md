# twenty-useful-js-snippets

Small solutions to single well-defined problems.

## TOC

1. [Reference](#reference)
2. [Snippets usage](#snippets-usage)
   - [Get Value](#get-value)
   - [Clamp](#clamp)
   - [Sleep](#sleep)
   - [Group by](#group-by)
   - [Collect by](#collect-by)

## Reference

This is the repository to store the code based on the article written by @henrik1

- Henrik Larsen Toft's
  [20 JavaScript snippets that will make you a better developer](https://levelup.gitconnected.com/20-javascript-snippets-that-will-make-you-a-better-developer-68dfe4bf5019)

## Snippets usage

#### Get Value

함수는 지정된 경로의 값을 반환하고, 값이 없으면 null을 반환합니다.

```js
getValue({ a: { b: { c: "d" } } }, "a.b.c"); // = d
```

| Function   | Parameter                     | Description                           |
| :--------- | :---------------------------- | :------------------------------------ |
| `getValue` | obj: `object`, path: `string` | if, vaild path return value else null |

---

#### clamp

값이 지정된 범위 내에 있는지 확인하고, 지정된 범위에 값이 없다면 최소값과 최대값에 가장 가까운 값을 반환(클램프)합니다.

```js
clamp(0, 10, -5); // = 0
```

| Function | Parameter                                    | Description                    |
| :------- | :------------------------------------------- | :----------------------------- |
| `clamp`  | min: `number`, max: `number`, value:`number` | value or clamp value(min, max) |

---

#### Sleep

다음 작업을 수행하기 전에 지정된 기간(밀리초)을 기다립니다.

```js
await sleep(1000); // waits 1 sec
```

| Function | Parameter          | Description                                 |
| :------- | :----------------- | :------------------------------------------ |
| `sleep`  | duration: `number` | Wait the specified duration in milliseconds |

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

| Function  | Parameter                   | Description  |
| :-------- | :-------------------------- | :----------- |
| `groupBy` | fn:`Function` list: `Array` | return `obj` |

---

#### Collect By

keying-function에 따라 관련 항목을 포함하는 하위 목록을 만듭니다.

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

| Function    | Parameter                   | Description             |
| :---------- | :-------------------------- | :---------------------- |
| `collectBy` | fn:`Function` list: `Array` | **groupBy is required** |
