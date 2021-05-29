// import '../public/index.html';
require('../public/index.html');



console.log('Hello World From Console!');
let div = document.createElement('div');

div.innerText = 'Hello World From TS!';
document.querySelector('body').append(div);
