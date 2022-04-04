# Spread

---

- `Destructuring` phá cấu trúc để gán vào biến.
- `Spread` nghĩa là giải, rả, phân rả, phân giải ra.
- `Rest` phần còn lại của tham số truyền vào.

---

## 1.Spread

### 1.1 Spread Array

> Xét ví dụ cho sẵn 2 Array, hãy tạo Array mới là kết hợp của 2 Array đã cho.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);
console.log(array3);
// [1, 2, 3, 4, 5, 6]
```

- Hoặc có thể viết lại bằng `Spread` như sau:

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
console.log(array3);
// [1, 2, 3, 4, 5, 6]
```

### 1.2 Spread Object

```js
const object1 = {
  name: 'Duy',
};
const object2 = {
  age: '134',
};

const object3 = {
  ...object1,
  ...object2,
};
console.log(object3);
// {name: 'Duy', age: '134'}
```

- Áp dụng để xử lý render trang khi lấy dữ liệu: 

```js
const defaultConfig = {
  api: 'http://localhost:8080/trang-chu',
  description: 'Trang chu',
  version: 'v3.1',
  author: 'Demo',
  year: 2022,
};
const newsConfig = {
  api: 'http://localhost:8282/news',
  description: 'Tin tuc',
};

const renderConfig = {
  ...defaultConfig,
  ...newsConfig,
};
console.log(renderConfig);
```
![Spread Object](./images/001.png 'Spread Object')

### 1.3 Spread Function
