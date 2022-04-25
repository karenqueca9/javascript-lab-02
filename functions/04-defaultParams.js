// We can assign default parameters
function sayHello(name = 'Alice', salute = 'Hello') {
    return `${salute}, I'm ${name}, nice to meet you`
}    

console.log(sayHello())
//default parameters can be overwritten
console.log(sayHello('Bob', 'Hi'))