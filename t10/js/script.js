const user= {name: 'Steve',surname: 'Rogers',age: 101,city: 'New York'};

function copy(obj)
{
    return Object.assign({}, obj);
}
console.log(user);
let cpy = copy(user);
console.log(cpy);

user.name = "John";
console.log(user);
console.log(cpy);

cpy.age=59;
console.log(user);
console.log(cpy);