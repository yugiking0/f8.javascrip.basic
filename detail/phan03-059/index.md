# Bài tập reduce method của Array

```js
/**
 * làm phẳng mảng
 */
var depthArray = [1, 2, 3, [4, 5], 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (acc, cur) {
  return acc.concat(cur);
}, []);

console.log(flatArray);
```
