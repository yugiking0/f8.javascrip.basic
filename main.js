function logger({ name, ...rest }) {
  console.log('Name: ', name);  // Name:  Javascript
  console.log('rest: ', rest); // rest:  {description: 'Description', price: 1000}
}

logger({
  name: 'Javascript',
  description: 'Description',
  price: 1000,
});
