//alert('Я Java Script!') //Задание 1

// let admin; // Задание 2
// let name;

// $name = "Иван";
// admin = $name;
// alert(admin)

// let name = "ilya";   //Задание 3
// alert(`hello ${1}`); //hello 1
// alert(`hello ${"name"}`); //hello name
// alert(`hello ${name}`); //hello ilya

// let name = prompt("Пожалуйста ,введите имя:"); //Задание 4
// if (name){
//     alert("Ваше имя: " + name);
// } else {
//     alert("Вы не ввели имя.")
// }


// let a = 1,b = 1 //Задание 5
// let c = ++a; // Ответ 2
// let d = b++ // Ответ 1
// alert(d)

// let a = 2 //Задание 6
// let x = 1 + (a*=2) // Ответ 5
// alert(x)

// let a = Number(prompt("Первое число?", 1)); //Задание 7
// let b = Number(prompt("Второе число?", 2));
// alert(a + b)

// 7 > 5 //true //Задание 8
// "Стол" > "Стул" //true
// "4" > "52" //true
// undefined == null //true
// undefined === null //false
// null == "\n0\n" //false
// null === +"\n0\n" //false

// if ("0"){ // Задание 9 
//     alert('Привет'); // ДА
// }

// let userInput = prompt("Какое 'официальное' название JavaScript?"); //Задание 10

// if (userInput === "ECMAScript") {
//     alert("Верно!")
// } else {

//     alert("Не знвете? ECMAScript!")
// }

// let userInput = prompt("Введите число") // Задание 11

// let number = Number(userInput)

// if (number > 0) {
//     alert(1);
// } else if (number , 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

//let result = (a + b < 4) ? 'мало' : 'много'; //Задание 12

// let message; // Задание 13

// message = (login == 'Сотрудник') ? 'Привет' :
//           (login == 'Директор') ? 'Здравствуйте' :
//           (login == '') ? 'Нет логина' :
//           '';

//alert( null || 4 || undefined ); //Задание 14 ответ 4

//alert( alert(1) || 2 || alert(3) ); //Задание 15 ответ 1

// alert( 1 && null && 2 ); // Задание 16 ответ null

//alert( alert(1) && alert(2) ); //Задание 17 ответ 1

// alert( null || 2 && 3 || 4 ); // Задание 18 ответ 3


// let value = NaN; ||Задание 19 ответ 30

// value &&= 10; //Задание 20
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);


// let age = 25;  //Задание 21

// if (age >= 14 && age <= 90) {
//     console.log("Возраст находится в диапазоне от 14 до 90 включительно.");
// } else {
//     console.log("Возраст вне диапазона от 14 до 90.");
// }


//Задание 22
// if (-1 || 0) alert( 'first' ); выполнится
// if (-1 && 0) alert( 'second' ); не выполнится
// if (null || -1 && 1) alert( 'third' ); выполнится




//Задание 23
// let userName = prompt("Кто там?", '');  

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }
// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

