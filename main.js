let data = [1, 2, 3, 1, 4, 3, 3, 5, 5, 5, 8, 9];

let newData = data.reduce((acc, cur)=>{
  console.log('1111111111111111');
  console.log(acc.indexOf(2)); 
  const isFound = acc.indexOf(cur);
  if(isFound !== -1){
    return acc;
  }else{
    acc.push(cur);
  }
  return acc;
}, []);

// // var a = [1, 2, 4, 5];
// // var b = 6;
// // console.log(a.find(x => x === b));
// console.log(newData);

let newData1 = data.reduce(function (acc, cur) {
  const isFound = acc.indexOf(cur);
  if (isFound) {
    acc.push(cur)
  }
  return acc
}, [])

console.log(newData) // [1, 2, 3, 4, 5, 8, 9]