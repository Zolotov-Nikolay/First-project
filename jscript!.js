"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из просмотренных фильмов в последнее время?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренных фильмов в последнее время?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из просмотренных фильмов в последнее время?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

// if (personalMovieDB.count < 10) {
//     console.log("Malo filmof posmotrel ty");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Molodec, prikolno!");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Ty vawe valiw filmy!");
// } else {
//     console.log("We have owibky");
// }

// console.log(personalMovieDB);




// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log("OK!");
// }

// (num === 50) ? console.log("OK!") : console.log('Error');

// const num = 50;
// switch (num) {
//     case 49:
//         console.log("NO GOD, NO!");
//         break;
//     case 100:
//         console.log("NO GOD, NO!");
//         break;
//     case 51:
//         console.log('YES,GOD!');
//         break;
//     default:
//         console.log('NOT TODAY!');
//         break;
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;  
// }
// while (num <= 55);

// for (let i = 1; i <8; i++) {
//     if (i === 6) {
//         continue;
//         // break;
//     }
//     console.log(i);
// }

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num =50;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello!");
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// const str = "text";
// const arr = [1, 2, 4];

// console.log(arr.length, str[2]);

// const str = "test";

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello World!";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(0, 7));

// const num = 12.2;
// console.log(Math.round(num));

// const Test = "12.2px";
// console.log(parseInt(Test));
// console.log(parseFloat(Test));

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt ('Один из последних просмотренных фильмов?', ''),
//               b = prompt ('На сколько оцените его?', '');
    
//         if (a != null && b != null && a!= '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов!');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель!');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы настоящий кинмоман!');
//     } else {
//         console.log('Произошла ошибка!');
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//         // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); можно записывать так
//     }
// }
// writeYourGenres();

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('JavaScript', done);

// learnJS('JavaScript', function() {
//     console.log('Я прошёл этот урок!');
// });

// const options = {
//     NAME: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border, bg);

// console.log(Object.keys(options).length);//!!!количество элементов в объекте!!!

// console.log(options.NAME);

// delete options.NAME;

// console.log(options);

// let counter = 0;
// for ( let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for ( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// const arr = [1230, 21, 23, 8, 63, 81, 6];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();//убирает последний элемент
// arr.push(10);//добавляет элемент последним

// console.log(arr);

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Ссылкa на obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c : {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'qwertyt';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(newObj);

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

//console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier);
// console.log(john.armor);
// john.sayHello();

// const numberOfFilms = {};

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }

// },
//     rememberMyFilms: function() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt ('Один из последних просмотренных фильмов?', ''),
//               b = prompt ('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// },
//     detectPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов!');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель!');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы настоящий кинмоман!');
//     } else {
//         console.log('Произошла ошибка!');
//     }
// },
//     showMyDB: function(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// },
//     toggleVisibleMyDB: function() {
//     if(personalMovieDB.privat) {
//         personalMovieDB.preivat = false;
//     } else {
//         personalMovieDB.privat = true;
//     }
// },
//     writeYourGenres: function() {
//     for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//         if (genre === '' || genre === null) {
//             console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             i--;
//         } else {
//             personalMovieDB.genres[i - 1] = genre;
//         }

//         // personalMovieDB.genres[i - 1] = genre;
//         // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); можно записывать так
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };


  // To String:
  // 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number:
// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");

// To Boolean:
// 1)

// 0, '', null, undefined, NaN; это всё имеет значение false

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));