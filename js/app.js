console.log('Hello, world!');
let youcan = 'You can ignore single and doble quotes like this: \\\'\\\' \\\"\\\"  ';
console.log(youcan);


let userName = prompt("What's your name?", 'Unknow');
alert(`Your name is: ${userName}`);

let surName = prompt("What's your surname?", 'Unknow');
alert(`Your name is: ${surName}`);

alert(`Your full name is: ${userName + surName}`);


let howold = prompt("How old are  your?", 'Unknow');
alert(`Your full name is: ${userName + surName} , your edge is: ${howold}`);


let admin_s = confirm('Are you an admin?');
alert( `Your full name is: ${userName + surName} , your edge is: ${howold} , admin status is: ${admin_s}`);

console.log(Boolean(alert('5'))); // false 5 была обьявлена но значение ей небыло присвоено
console.log(true > false); // true  возьмем к примеру переменные а и b будем присваивать значения и получим всегда true
console.log(true > 5); // false можно подобрать значения которые меньше заданого
console.log(true < '5'); // false можно подобрать значения которые будут больше заданого
console.log(true > null); // true можно подобрать значения которые будут больше нуля




