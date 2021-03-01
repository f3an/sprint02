let num = 42;
let bigint = 42n;
let str = 'text';
let bool = true;
let nul = null;
let undef;
let obj = { name: "John", age: 32 }
let sym = Symbol('foo');

function fun() {
    alert("hello")
}

alert("Number is " + typeof(num));
alert("BigInt is " + typeof(bigint));
alert("String is " + typeof(str));
alert("Boolean is " + typeof(bool));
alert("Null is " + typeof(nul));
alert("Undefined is " + typeof(undef));
alert("Object is " + typeof(obj));
alert("Symbol is " + typeof(sym));
alert("Function is " + typeof(fun));