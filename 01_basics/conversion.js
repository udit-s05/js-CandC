let score = "33"
console.log(typeof(score));

let val = Number(score)
console.log(typeof(val));

let x = "33abc"
console.log(typeof(x));

let t = Number(x)
console.log(typeof(t));
console.log(t);
// even though x is not a pure number but still it gets converted to number 

let y = null
console.log(typeof(y));
console.log(y);

let u = Number(y)
console.log(typeof(u));
console.log(u);

/* "33" -> 33
"33" -> NaN
true -> 1 false -> 0*/

let m = 1;
let b = Boolean(m);
console.log(b);

let str = "";
let a = Boolean(str);
console.log(a);

let st = "udit";
let ab = Boolean(st);
console.log(ab);
