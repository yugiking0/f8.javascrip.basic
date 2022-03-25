function logger(...rest) {
  console.log(arguments);
  console.log(rest);
}

logger('Message','Xin Chao', 'Hello')