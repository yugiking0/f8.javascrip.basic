var btn = document.querySelector('button');

// Việc 1
function viec1() {
  console.log('Viec 1');
}

// Việc 2
function viec2() {
  console.warn('Viec 2');
}

// Việc 3
function viec3() {
  console.error('Viec 3');
}

// addEventListener : Thêm event vào Button
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
btn.addEventListener('click', viec3);

// RemoveEventListener : Hủy event 
setTimeout(function () {
  btn.removeEventListener('click', viec2);
}, 3000);
