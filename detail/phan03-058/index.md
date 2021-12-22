# Array reduce method

---

**Bài toán:**
Tính tổng số Coin của các khóa học sau:

```js
var courses = [
  { id: 1, name: 'Javascript', coin: 100 },
  { id: 2, name: 'HTML,CSS', coin: 200 },
  { id: 3, name: 'Ruby', coin: 300 },
  { id: 4, name: 'PHP', coin: 200 },
  { id: 3, name: 'React', coin: 480 },
];
```

- Nếu dùng kiểu vòng lặp sẽ viết là:

```js
var totalCoin = 0;
for (var i of courses) {
  // console.log(i);
  totalCoin += i.coin;
}

console.log(totalCoin);
```

- Với cách viết bằng Reduce của Array thì sẽ viết đơn giản hơn:

```js
var totalCoin = courses.reduce(function (acc, cur) {
  return (acc += cur.coin);
}, 0);

console.log(totalCoin);
```

- Cấu trúc của Method Reduce như sau:

> courses.reduce(functionMethod,initialValue);
> functionMethod(accumulator, currentValue, indexCurrent,originArray)
>
> - functionMethod : Hàm chạy mỗi lần lặp qua các phần tử mảng.
> - initialValue : Giá trị khởi tạo ban đầu
> - accumulator : Biến tích trữ
> - currentValue : Phần tử mảng hiện tại
> - indexCurrent : Index của phần tử hiện tại
> - originArray : Mảng đang xử lý.

- Ta xem lại ví dụ:

```js
var totalCoin = courses.reduce(coinHandler, 0);
```

### Bài tập

> Bài tập 6
> Thêm phương thức cho Array tương tự Reduce:
> **Input**: [1, 2, 3, 4].reduce2(function reducer(total, number) { return total + number })
> **Output**: 10

#### Cách 1:

```js
/* bài 6 Thêm phương thức reduce2 cho kiểu mảng, 
logic hoạt động tương tự reduce gốc. */

Array.prototype.reduce2 = function (myCallback, initialValue) {
  if (initialValue == undefined) {
    initialValue = 0;
  }
  var total = initialValue;
  for (var item of this) {
    total = myCallback(total, item);
  }
  return total;
};
```

#### Cách 2:

```js
// Làm bài tập tại đây
Array.prototype.reduce2 = function (callBack, initialValue) {
  if (initialValue == undefined) {
    initialValue = 0;
  }
  var total = initialValue;
  for (var item of this) {
    total = callBack(total, item);
  }
  return total;
};
```

#### Cách 3:

```js
Array.prototype.reduce2 = function (myCallback, initialValue) {
  var total = initialValue || 0;
  for (var i = 0, n = this.length; i < n; i++) {
    total = myCallback(total, this[i], i, this);
  }
  return total;
};
```

#### Cách 4:

```js
Array.prototype.reduce2 = function (myCallback, initialValue) {
  result = initialValue ? initialValue : 0;
  for (i of this) result = myCallback(result, i);
  return result;
};
```

#### Cách 5:

```js
Array.prototype.reduce2 = function (myCallback, initialValue) {
  var result;
  initialValue ? (result = initialValue) : (result = null);

  for (i of this) {
    result = myCallback(result, i, this.indexOf(i), this);
  }
  return result;
};
```

#### Cách 6:

```js
Array.prototype.reduce2 = function (myCallback, initialValue) {
  let result = initialValue || this[0];
  for (let i = 0; i < this.length; i++) {
    if (!initialValue && i === 0) {
    } else {
      result = myCallback(result, this[i], i, this);
    }
  }
  return result;
};
```

#### Cách 7:

```js
Array.prototype.reduce2 = function (myCallback, initialValue) {
  var arrayLength = this.length;
  var accumulator,
    start = 0;
  if (typeof initialValue == 'undefined') {
    accumulator = this[0];
    start = 1;
  } else {
    accumulator = initialValue;
  }
  for (var i = start; i < arrayLength; i++) {
    console.log(accumulator);
    accumulator = myCallback(accumulator, this[i], i, this);
  }
  return accumulator;
};
```

#### Cách 8:

```js
function sumNumbers(inputs) {
  return inputs.reduce(function (total, currentValue, index) {
    // Giá trị là số và số đó không phải là NaN (vì NaN là 1 số)
    if (typeof currentValue == 'number' && !isNaN(currentValue)) {
      return total + currentValue;
    } else return total + 0;
  }, 0);
}
```

#### Cách 9:

```js
return inputs.reduce(function (accumulator, input) {
  return typeof input == 'number' && !isNaN(input)
    ? accumulator + input
    : accumulator;
}, 0);
```

#### Cách 10:

```js
function sumNumbers(inputs) {
  return inputs.reduce(
    (total, value) => (Number(value) ? total + value : total),
    0
  );
}
```

#### Cách 11:

```js
function sumNumbers(inputs) {
  function sum(accumulator, currentValue) {
    if (typeof currentValue == 'number' && isNaN(currentValue) == false) {
      return (accumulator = accumulator + currentValue);
    } else return (accumulator = accumulator + 0);
  }
  var total = inputs.reduce(sum, 0);
  return total;
}
```

#### Cách 12:

```js
function sumNumbers(inputs) {
  return inputs.filter(Number).reduce((a, b) => a + b, 0);
}
```

#### Cách 13:

```js
Array.prototype.reduce2 = function (callback, initValue) {
  var result;
  var length = this.length;
  let i = 0;
  if (arguments.length < 2) {
    result = this[0];
    i = 1;
  } else {
    result = initValue;
  }
  for (; i < length; i++) {
    var result = callback(result, this[i], i, this);
  }
  return result;
};
```

#### Cách 14:

```js
Array.prototype.reduce2 = function (callback, initValue) {
  result = initValue ? initValue : 0;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
```

#### Cách 15:

```js
//bai 6
Array.prototype.reduce2 = function (myCallback, initialValue) {
  if (initialValue == undefined) {
    initialValue = 0;
  }
  var total = initialValue;
  for (var item of this) {
    total = myCallback(total, item);
  }
  return total;
};
```
