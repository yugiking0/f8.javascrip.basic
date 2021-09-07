// function getRequestBodyFromValues(formValues) {
//   var formObjects = {};
//   for (var i of formValues) {
//     // console.log(i.field, i.value);
//     formObjects[i.field] = i.value;
//   }
//   return formObjects;
// }

// var formList = [
//   { field: 'name', value: 'Sơn Đặng' },
//   { field: 'age', value: 18 },
// ];

// console.log(getRequestBodyFromValues(formList));

// function checkPositiveNumbers(numbers) {
//   return !numbers.some(function (number, index) {
//     console.log(number);
//     return number <= 0 || number != number.toFixed(0);
//   });
// }

// arr = [8, null, 1, null];
// console.log(checkPositiveNumbers(arr));

// var arr = [
//   { name: 'Javascript', vnd: null },
//   { name: 'PHP', vnd: 990000 },
//   { name: 'HTML, CSS', vnd: 0 },
// ];

// function hasFreeCourses(courses) {
//   return courses.some(function (course) {
//     return course.vnd === 0;
//   });
// }

// console.log(hasFreeCourses(arr));

// var arr = [
//   {
//     name: 'Cá heo',
//     attack: 1250,
//     speed: 100,
//     hitpoint: 100,
//   },
//   {
//     name: 'Khủng long',
//     attack: 120,
//     speed: 80,
//     hitpoint: 180,
//   },
// ];

// // Làm bài tập tại đây
// function findAMonsterByAttack(monsters) {
//   var monster = monsters.find(function (item) {
//     return item.attack === 150;
//   });

//   return !!monster ? monster : null;
// }

// console.log(findAMonsterByAttack(arr));

// var arr = ['hi', 'abc', 'chuỗi', '123'];
// function findStringsInArrayByKeyword(keyword, strings) {
//   return strings.filter(function (string) {
//     return string.indexOf(keyword) >= 0;
//   });
// }

// console.log(
//   findStringsInArrayByKeyword('PHP', ['Javascript', 'PHP', 'Học PHP'])
// );

/**
 * Bài tập
 * Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra các giá trị bằng nhau giữa hai array.
 */

// var arr1 = [1, 2, 6, 8];
// var arr2 = [21, 9, 61];

// function findEqualValues(array1, array2) {
//   return array1.filter(function (i) {
//     return array2.some(function (j) {
//       return i == j;
//     });
//   });
// }

// console.log(findEqualValues(arr1, arr2));

// var languages = [
//     'Javascript',
//     'CSS',
//     'Html',
//     'Java'];

// // 1.for/of
// console.log('---1. for/of----');
// for (var course of languages) {
//   console.log(course);
// }
// // 2.for/in
// console.log('---2. for/of----');
// for (var index in languages) {
//   console.log(index, languages[index]);
// }

// var myString = 'Javascript';
// for (var char of myString) {
//   console.log(char);
// } // J a v a s c r i p t

// var myInfo = {
//   firstName: 'Dinh',
//   lastName: 'Quang Duy',
//   birthYear: 1985,
//   address: 'Đà Nẵng',
//   country: 'Việt Nam',
// };
// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));

// for (var item of Object.keys(myInfo)) {
//   console.log(item);
// }

// for (var item of Object.values(myInfo)) {
//   console.log(item);
// }

// var i = 0;
// // while (i <= 100) {
// //   console.log('Line :', i);
// //   i++;
// // }

// var languages = ['Javascript', 'CSS', 'Html', 'Java'];
// while (i < languages.length) {
//   console.log(languages[i]);
//   i++;
// }

// var i = 0;
// var isSuccess = false;
// do {
//   i++;
//   console.log('Nhập lần: ' + i);

//   // Nếu nạp thành công:
//   if (false) {
//     isSuccess = true;
//   }
//   console.log('Đã sai. Xin nhập lại.');
// } while (i < 3 && !isSuccess);

/**
 * Nhập 3 lần kiểm tra
 */

// const textID = document.querySelector('#text-id');
// const btnID = document.querySelector('#btn-id');

// var hiddenString = '123';
// var lan = 1;
// btnID.addEventListener('click', function () {
//   var isSuccess = false;

//   do {
//     var numberInput = prompt(`Nhập lần ${lan}`);

//     if (numberInput === hiddenString) {
//       isSuccess = true;
//       doCorrect();
//       break;
//     }

//     lan++;

//     if (lan >= 3) {
//       doDisable();
//       textID.textContent = 'Đã hết lần nhập!';
//     }
//   } while (lan <= 3 && !isSuccess);
// });

// function doCorrect() {
//   textID.textContent = 'Dung roi!';
//   doDisable();
// }

// // Disable text & Button
// function doDisable() {
//   btnID.disabled = true;
// }

/**
 * Kiểm tra mã số thẻ cào khi mà mạng chậm
 * Thử kết nối 3 lần.
 */

// var numberString = 'ABC123456';
// var count = 1;

// do {
//   console.log('Lần ' + count);
//   setTimeout(function () {
//     console.log(`Thử lần ${count} : ` + numberString);
//     count++;
//   }, 3000);
//   count++;
// } while (count <= 3);

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }
// prettier-ignore
// var myArr = [
//   [1,2],
//   [3,4],
//   [5,6],
//   [7,8]
// ]
// // Print 1->8
// for (var i in myArr) {
//   // console.log(i);
//   for (var j in myArr[i]) {
//     console.log(myArr[i][j]);
//   }
// }

// for(var i=100; i>0; i-=5){
//   console.log(i);
// }

/**
 * Array Reduce Method
 */

/*
var courses = [
  {id: 1,
    name: "Javascript",
    coin: 100
  },
  {id: 2,
    name: "HTML,CSS",
    coin: 200
  },
  {id: 3,
    name: "Ruby",
    coin: 300
  },
  {id: 4,
    name: "PHP",
    coin: 200
  },
  {id: 5,
    name: "React",
    coin: 480
  },
]
var i = 0;
var totalCoin = courses.reduce(coinHandler, 0);

function coinHandler(accumulator, currentValue, indexCurrent, originArray) {
  i++;
  console.table({
    'Lần chạy': i,
    'Biển lưu trữ': accumulator,
    'Phần từ hiện tại': currentValue,
    index: indexCurrent,
    'Mảng ban đầu': originArray,
  });
}
*/

/**
 * Array Methods:
  - forEach()
  - every()
  - some()
  - find()
  - filter()
  - map()
  - reduce()
 */

/*
var courses = [
    {id: 1,
      name: "Javascript",
      coin: 100
    },
    {id: 2,
      name: "HTML,CSS",
      coin: 200
    },
    {id: 3,
      name: "Ruby",
      coin: 300
    },
    {id: 4,
      name: "PHP",
      coin: 200
    },
    {id: 5,
      name: "React",
      coin: 480
    },
  ]

var course = courses.find(function (value, index, originArray) {
  return value.name == 'SQL'; // undefined
});

console.log(course); // undefined
*/

/*
var depthArray = [1,2,3,[4,5],6,[7,8,9]];
// var flatArray = depthArray.reduce(function (acc, cur) {
//   return acc.concat(cur);
// }, []);

// console.log(flatArray);

Array.prototype.reduce2 = function (myCallBack, myInitialValue) {
  if (myInitialValue == undefined) {
    myInitialValue = 0;
  }
  this.forEach(function (value, index, originArray) {
    myInitialValue = myCallBack(myInitialValue, value, index, originArray);
  });
  return myInitialValue;
};

var newArr = depthArray.reduce2(function (acc, cur, index, originArray) {
  console.log(index);
  console.log(originArray);
  return acc.concat(cur);
}, []);

console.log(newArr);
*/

/**
 * Array.prototype.reduce2
 * @param {*} myCallBack
 * @param {*} myInitialValue
 * @returns
 */

/*
Array.prototype.reduce2 = function (myCallBack, myInitialValue) {
  if (myInitialValue == undefined) {
    myInitialValue = 0;
  }
  this.forEach(function (value, index, originArray) {
    myInitialValue = myCallBack(myInitialValue, value, index, originArray);
  });
  return myInitialValue;
};

const arr = [1, 2, 3, 4, 5];
var total = arr.reduce2((acc, cur) => acc + cur, 10);
console.log(total);
*/

// var myArr = ['Javascript','PHP','CSS']

// console.log(myArr.includes('PHP')); // true
// console.log(myArr.includes('Javascript', 0)); // true
// console.log(myArr.includes('Javascript', 1)); // false
// // -2 + 3 =  1 // array.length is 3
// console.log(myArr.includes('PHP', -2)); // true

// var number =Math.round(Math.random()*5+1);
// console.log(number);
/*
// 1. Ta có 1 hàm kiểm tra đối số truyền vào như sau:
function myFunction(para) {
  if(typeof para === "function") {
    para('Học lập trình Javascript');
  }
}

// 2. Tạo 1 hàm khác
function myCallback(myValue) {
  console.log('Giá trị:', myValue);
}

// 3. Truyền vào hàm trên
myFunction(myCallback); // Kiểu dữ liệu:  function

// 4. Gọi hàm
myCallback('Học lập trình Javascript');
myFunction(123); // Kiểu dữ liệu:  number
myFunction('Javascript'); // Kiểu dữ liệu:  string
*/

/*
var courses = [
  'Javascript',
  'CSS',
  'Html'
]
var languages = 7;
// var htmls = courses.map(function (course) {
//   return `<h1>${course}</h1>`;
// });
// console.log(htmls.join(''));

// 1. Khai báo vào Prototype của Array thêm 1 Method mới
Array.prototype.map2 = function (callBack) {
  // 0. Check đối số truyền vào
  console.log(typeof this);

  //console.log(this); // Kiểm tra key word this gọi lại
  // Vì map sẽ trả về 1 mảng nên ta sẽ thêm 1 mảng tạm và return về mảng này
  var output = [];
  var lengthArray = this.length;
  for (var i = 0; i < lengthArray; i++) {
    var result = callBack(this[i], i);
    output.push(result);
  }
  return output;
};

languages.map2(function (course) {
  return `<h1>${course}</h1>`;
});

var html2s = courses.map2(function (course) {
  return `<h1>${course}</h1>`;
});
console.log(html2s.join(''));
*/

/*
var courses = [
  { course: 'Javascript', value: 10 },
  { course: 'CSS', value: 20 },
  { course: 'Html', value: 30 },
];

var total = courses.reduce(function (acc, cur, index, arr) {
  return acc + cur.value;
}, 10);

console.log(total);

// Viết lại
Array.prototype.reduce2 = function (callBack) {
  console.log(arguments.length); // 1. Kiểm tra số tham số truyền vào.
  var acc = this[0];
  var i = 1;
  var lengthArr = this.length;
  if (arguments.length > 1) {
    acc = arguments[1];
    i = 0;
  }
  for (i; i < lengthArr; i++) {
    acc = callBack(acc, this[i], i, this);
  }
  return acc;
};

var total2 = courses.reduce2(function (acc, cur, index, arr) {
  return acc + '<h1>' + cur.course + '</h1>';
}, '');

console.log(total2);

// Viết lại
Array.prototype.reduce3 = function (callBack, initialValue) {
  console.log(arguments.length); // 1. Kiểm tra số tham số truyền vào.
  var i = 0;
  var lengthArr = this.length;
  if (arguments.length < 2) {
    initialValue = this[0];
    i = 1;
  }
  for (i; i < lengthArr; i++) {
    initialValue = callBack(initialValue, this[i], i, this);
  }
  return initialValue;
};

var total3 = courses.reduce3(function (acc, cur, index, arr) {
  return acc + '<h1>' + cur.course + '</h1>';
}, '');

console.log(total3);
*/
/*
var courses = [
  { course: 'Javascript', value: 10 },
  { course: 'CSS', value: 20 },
  { course: 'Html', value: 30 },
];

var filterArr = courses.filter(function (item) {
  return item.value > 10;
});
console.log(filterArr);

Array.prototype.filter2 = function (callBack) {
  var output = [];
  var lengthArr = this.length;
  for (var i = 0; i < lengthArr; i++) {
    if (callBack(this[i], i, this) === true) {
      output.push(this[i]);
    }
  }
  return output;
};

filterArr = courses.filter2(function (item) {
  return item.value > 5;
});
console.log(filterArr);
*/

/**
 * flat : Làm phẳng mảng
 */
const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [0, 1, 2, [[[3, 4]]]];

Array.prototype.flat2 = function (callBack) {
  var output = [];
  var lengthArr = this.length;
  output = this.reduce(function (acc, cur) {
    return !Array.isArray(cur) ? acc.concat(cur) : acc.concat(cur.flat2());
  }, []);

  return output;
};
console.log(arr1.flat2());
console.log(arr2.flat2(2));
