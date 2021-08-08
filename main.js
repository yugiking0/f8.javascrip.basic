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
