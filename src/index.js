/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "val変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

//letは再宣言不可能
// let val2 = "let変数を再宣言";
// var val2 = "var変数で再宣言";

// const val3 = "const変数";
// console.log(val3);

//const変数は上書き不可能
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "fukaya",
//   age: 38,
// };
// val4.name = "takehiro";
// val4.address = "Fukushima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "turtle";
val5.push("monkey");
console.log(val5);
