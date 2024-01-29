// odd and even number program

// let a = 10;
// a % 2 == 0 ? console.log("even number") : console.log("odd number");

// ---------------------------------------------------------------
// prime and not prime number in javascript
// let n = 15;
// if (n == 1) {
//   comsole.log("is prime number");
// } else if (n < 1) {
//   console.log("is not a prime number");
// } else {
//   for (i = 2; i < n; i++) {
//     if (n % i == 0) {
//       var res = "is not a prime number";
//       break;
//     } else {
//       var res = "is prime number";
//     }
//   }
//   console.log(res);
// }

// recourcen febonacci series
// function fun(n) {
//   if (n == 1) return 0;
//   if (n == 2) return 1;
//   return fun(n - 1) + fun(n - 2);
// }
// console.log(fun(5));
// febonacci series

// function fun(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * fun(n - 1);
// }
// console.log(fun(5));

// -----------------star pattern-------;

// *
// **
// ***
// ****
// *****
function fun(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= 5; j++) {
      console.log("*");
    }
    console.log("</br>");
  }
}
console.log(fun(5));
