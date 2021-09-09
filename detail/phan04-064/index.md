# Get element method - Phần 1

## Tổng quan

Có thể tương tác với Element từ cách cách là:

- ID
- class
- Tag Name
- CSS Selector
- HTML Collection

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>F8 - Javascript Basic</title>
    <style>
      body {
        height: 100vh;
        align-items: center;
        background: linear-gradient(to top left, #28b487, #7dd56f);
      }

      h1 {
        width: 100%;
        text-align: center;
        color: white;
      }
      .hidden {
        display: dis;
      }
    </style>
  </head>
  <body>
    <h1 id="title">F8 - Javascript Basic</h1>

    <h2 class="h2class">Core HTML</h2>
    <h2 class="h2class">XML DOM</h2>
    <h2 class="h2class">HTML DOM</h2>

    <h3 class="h3class">1. Element</h3>
    <h3 id="att">2. Attribute</h3>
    <h3 id="text">3. Text</h3>

    <script src=".\main.js"></script>
  </body>
</html>
```

## 1. ID

- Ta có các ID là id="title", id="att", id="text", để chọn được đối tượng ID ta dùng `document.getElementById()`, getElement không có s, số ít chỉ 1 đối tượng.
  > Lưu ý: Vì ID trong HTML chỉ tồn tại duy nhất và tuân theo W3C nên việc getElementById chỉ lấy được 1 đối tượng tương ứng.

```js
var title = document.getElementById('title');
console.log(title);
```

- Khi chuyển con trỏ vào vị trí console thì sẽ highlight lên được id="title"

![getElementById](./images/001.png 'getElementById')

- Hoặc viết lại để tránh nhầm lẫn với Tab Elements của DevTool khi hiển thị ở Tab Console ta viết đối tượng(Node) trong mảng hoặc Object để dễ quản lý.

```js
var title = document.getElementById('title');
console.log({
  element: title,
});
```

![getElementById](./images/002.png 'getElementById')

## 2. class

- Ta có các class là class="h2class", class="h3class"
- Cách để chọn được các đối tượng có cùng class ta dùng lệnh:
  `document.getElementsByClassName()`
- Elements có s, số nhiều do có nhiều đối tượng và trả về một HTMLcollection tương tự như mảng Array nhưng không dùng được các method như: .map, .reduce,...

```js
var h2class = document.getElementsByClassName('h2class');
console.log(h2class);
```

![getElementById](./images/003.png 'getElementById')

## 3. Tag Name

- Tag Name là những thẻ Tag của html như: h1, h2, p, a,...
- Cách để chọn những đối tượng thẻ này sẽ dùng ` document.getElementsByTagName()`

```js
var h2tag = document.getElementsByTagName('h2');
console.log(h2tag);
```

- Elements có s, số nhiều do có nhiều đối tượng và trả về một HTMLcollection

## 4. CSS Selector

- Chọn đối tượng giống như cách mà CSS chọn các đối tượng của html, thông qua câu lệnh `document.querySelector`

```js
var att = document.querySelector('#att');
console.log(att);

var h2class = document.querySelector('.h2class');
console.log(h2class);

var h2 = document.querySelector('h1');
console.log(h2);
```

![CSS Selector](./images/004.png 'CSS Selector')

- Cần xem ôn lại mục CSS Selector [CSS selector](./css-selector.md)
