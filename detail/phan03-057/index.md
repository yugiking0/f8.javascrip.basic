# 15 Array Method của JavaScript cần phải biết vào năm 2021

---

Trong JavaScript, một mảng (array) là một biến đặc biệt được sử dụng để lưu trữ các phần tử khác nhau.
Mảng có một số thuộc tính tích hợp và phương thức mảng (gọi là array method) mà chúng ta có thể sử dụng để thêm, xóa, lặp hoặc thao với tác dữ liệu theo nhu cầu của mình.
Và biết sử dụng các Array method có thể nâng cao kỹ năng lập trình Javascript của bạn lên rất nhiều.

Trong bài viết này, chúng ta sẽ cùng tìm hiểu về 15 Array method của Javascript có thể giúp bạn thao tác với dữ liệu của mình đúng cách vào năm 2021.

1.  some()
2.  reduce()
3.  every()
4.  map()
5.  flat()
6.  filter()
7.  forEach()
8.  findIndex()
9.  find()
10. sort()
11. concat()
12. fill()
13. includes()
14. reverse()
15. flatMap()

> Lưu ý: Trong bài viết này, chúng ta sẽ đơn giản hóa function được truyền dưới dạng tham số. Và, bạn nên HỌC `JAVASCRIPT CƠ BẢN` trước để có thể hiểu rõ các Array Method này.

Ví dụ:

```js
// Thay vì viết như thế này
myAwesomeArray.some(test => {
  if (test === 'd') {
    return test;
  }
});
// Chúng ta sẽ biết ngắn gọn thế này
myAwesomeArray.some(test => test === 'd');
```

Bắt đầu nào!

---

## 1. Phương thức some()

Phương thức `some()` này kiểm tra mảng với một hàm được truyền dưới dạng tham số.

Nó sẽ trả về `true` nếu có ít nhất một phần tử khớp với test và ngược lại trì trả về `false`.

```js
const myAwesomeArray = ['a', 'b', 'c', 'd', 'e'];

myAwesomeArray.some(test => test === 'd');
//-------> Kết quả : true
```

- Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_some.asp

---

## 2. Phương thức reduce()

Phương thức `reduce()` này nhận một hàm có bộ tích lũy là đối số đầu tiên và giá trị làm đối số thứ hai.

Nó áp dụng hàm cho bộ tích lũy và mỗi giá trị trong mảng.

- Có nghĩa là, nó lặp qua các giá trị trong mảng đã cho và áp dụng hàm, sau đó lưu vào đối số đầu tiên (bộ tích lũy).
- Nếu không có giá trị ban đầu thì lần đầu tiên nó sẽ lấy phần tử thứ nhất và phần tử thứ hai của mảng
- ...

Cuối cùng, nó trả về một giá trị duy nhất.

**_Ví dụ:_**

```js
const myAwesomeArray = [1, 2, 3, 4, 5];

myAwesomeArray.reduce((total, value) => total * value);
// 1 * 2 * 3 * 4 * 5
//-------> Kết quả = 120
```

- Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_reduce.asp

---

## 3. Phương thức every()

Phương thức `every()` này kiểm tra mảng với một hàm được truyền dưới dạng tham số.

Nó sẽ trả về `true` nếu mỗi phần tử của mảng khớp với test và ngược lại (chỉ cần 1 phần tử của mảng không khớp) nó sẽ trả về `false`.

```js
const myAwesomeArray = ['a', 'b', 'c', 'd', 'e'];

myAwesomeArray.every(test => test === 'd');
//-------> Kết quả : false

const myAwesomeArray2 = ['a', 'a', 'a', 'a', 'a'];

myAwesomeArray2.every(test => test === 'a');
//-------> Kết quả : true
```

Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_every.asp

---

## 4. Phương thức map()

Phương thức `map()` này nhận một hàm làm tham số. Và trả về một mảng mới có chứa một hình ảnh của từng thành phần của mảng.

- Phương thức `map()` Không thay đổi mảng ban đầu

Và nó sẽ luôn trả lại cùng số lượng phần tử.

```js
const myAwesomeArray = [5, 4, 3, 2, 1];
myAwesomeArray.map(x => x * x);

//-------> Kết quả : 25
//                   16
//                   9
//                   4
//                   1
```

Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_map.asp

---

## 5. Phương thức flat()

Phương thức `flat()` này thường được sử dụng để tạo ra một mảng mới chứa các phần tử trong mảng (mà có chứa mảng con)

```js
const myAwesomeArray = [[1, 2], [3, 4], 5];

myAwesomeArray.flat();
//-------> Kết quả : [1, 2, 3, 4, 5]
```

Tuy nhiên, nếu trong mảng con lại chứa một mảng con nữa thì nó sẽ thực hiện như sau:

```js
const myAwesomeArray = [[1, 2], [3, [4, 6]], 5];

myAwesomeArray.flat();
//-------> Kết quả : [1, 2, 3, [4, 6], 5]
```

---

## 6. Phương thức filter()

Phương thức `filter()` này nhận một hàm làm tham số. Hàm này sẽ thực hiện lọc lần lượt các phần tử của mảng, nếu true nó sẽ nhét chúng vào một mảng mới.

Mảng mới này cuối cùng là kết quả được trả về.

```js
const myAwesomeArray = [
  { id: 1, name: 'Hải' },
  { id: 2, name: 'Doanh' },
  { id: 3, name: 'Việt' },
  { id: 4, name: 'Doanh' },
];

myAwesomeArray.filter(element => element.name === 'Doanh');
//-------> Kết quả : 0:{id: 2, name: "Doanh"},
//                   1:{id: 4, name: "Doanh"}
```

Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_filter.asp

---

## 7. Phương thức forEach()

Phương thức forEach() này áp dụng một hàm cho từng phần tử của mảng.

```js
const myAwesomeArray = [
  { id: 1, name: 'Hải' },
  { id: 2, name: 'Doanh' },
  { id: 3, name: 'Việt' },
];

myAwesomeArray.forEach(element => console.log(element.name));
//-------> Kết quả : Hải
//                   Doanh
//                   Việt
```

Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_foreach.asp

---

## 8. Phương thức findIndex()

Phương thức `findIndex()` này nhận một hàm làm tham số và sẽ áp dụng nó cho mảng.

Nó trả về chỉ mục của một phần tử được tìm thấy và thỏa mãn hàm kiểm tra được truyền dưới dạng đối số hoặc trả về -1 nếu không thỏa mãn nó.

```js
const myAwesomeArray = [
  { id: 1, name: 'Hải' },
  { id: 2, name: 'Doanh' },
  { id: 3, name: 'Việt' },
];

myAwesomeArray.findIndex(element => element.id === 3);
//-------> Kết quả : 2

myAwesomeArray.findIndex(element => element.id === 7);
//-------> Kết quả : -1
```

Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_findindex.asp

---

## 9. Phương thức find()

Phương thức `find()` này nhận một hàm làm đối số và sẽ áp dụng nó cho mảng.

Nó trả về giá trị của một phần tử được tìm thấy trong mảng và thỏa mãn hàm kiểm tra. Nếu không, nó trả về `undefined`.

```js
const myAwesomeArray = [
  { id: 1, name: 'Hải' },
  { id: 2, name: 'Doanh' },
  { id: 3, name: 'Việt' },
];

myAwesomeArray.find(element => element.id === 3);
//-------> Kết quả : {id: 3, name: "Việt"}

myAwesomeArray.find(element => element.id === 7);
//-------> Kết quả : undefined
```

Tham khảo thêm tại đây: https://www.w3schools.com/jsref/jsref_find.asp

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
