// const printForecast = function (arr) {
//     let x = ' ';
//     for (let i = 0; i < arr.length; i++) {
//       if (i === 0) x += `... ` + arr[i] + `°C in ${i + 1} days... `;
//       if (i !== 0) x += arr[i] + `°C in ${i + 1} days... `;
//     }
//     console.log(x);
//   };

//   console.log(printForecast([17, 21, 23]));
//   console.log(printForecast([12, 5, -5, 0, 4]));

// find the min and max ignoring the strings, the avarage and connect two arrays in 1 array
const arr1 = [1, 2, 3, 4, 5, "hello"];
const arr2 = [6, 7, 8, 9, 10, "Ahmed"];

const calcAvarage = function (x, y) {
  let z = []; // z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-1,  "hello", "Ahmed"];
  z = x.concat(y);
  debugger;
  let min = z[0];
  let max = z[0];
  for (let i = 0; i < z.length; i++) {
    if (typeof z[i] !== "number") continue;

    if (z[i] < min) min = z[i];
    if (z[i] > max) max = z[i];
  }
  return (diff = max - min);
};

console.log(calcAvarage([1, 2, 3, "Hello"], [4, 5, 6, "Hi"]));
