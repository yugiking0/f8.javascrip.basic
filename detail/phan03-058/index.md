# Array reduce method

---

Bài toán:
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
