//by value
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

//by reference (all objects (including functions))
var c = {greeting: 'hi'}
var d;

d = c;
c.greeting = 'hello';
console.log(c);
console.log(d);

function changeGreeting(obj){
    obj.greeting = 'Hola';
}

changeGreeting(d);

console.log(d);
console.log(c);

c = { greeting: 'howdy'};

console.log(c);
console.log(d);