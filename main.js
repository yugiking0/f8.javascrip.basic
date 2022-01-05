var cat = {
  name: 'Tom',
  age: 3,
  sound: 'bark: "Gau Gau"',
  color: function () {
    return 'Orange';
  },
};
console.log('Color: ', cat.color());
console.log(JSON.stringify(cat));

// Color:  Orange
// {"name":"Tom","age":3,"sound":"bark: \"Gau Gau\""}
