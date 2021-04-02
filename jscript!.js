"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из просмотренных фильмов в последнее время?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренных фильмов в последнее время?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов в последнее время?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Malo filmof posmotrel ty");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Molodec, prikolno!");
} else if (personalMovieDB.count >= 30) {
    console.log("Ty vawe valiw filmy!");
} else {
    console.log("We have owibky");
}

console.log(personalMovieDB);




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


let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;  
// }
// while (num <= 55);

for (let i = 1; i <8; i++) {
    if (i === 6) {
        continue;
        // break;
    }
    console.log(i);
}