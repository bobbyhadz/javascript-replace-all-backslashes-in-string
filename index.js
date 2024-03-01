// EXAMPLE 1 - Replace all backslashes in a String in JavaScript

const str = 'bobby\\hadz\\com';

const replaced = str.replaceAll('\\', '-');
console.log(replaced); // 👉️ 'bobby-hadz-com'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace all backslashes in a String using `String.split()`

// const str = 'bobby\\hadz\\com';

// const replaced = str.split('\\').join('_');
// console.log(replaced); // 👉️ 'bobby_hadz_com'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace all backslashes in a String using `String.replace()`

// const str = 'bobby\\hadz\\com';

// const replaced = str.replace(/\\/g, '_');
// console.log(replaced); // 👉️ 'bobby_hadz_com'
