let arr1 = [1, 2, 'b', 4];
let arr2 = [3, 'a', 'c'];
temp = arr1
arr1 = arr2
arr2 = temp
console.log(arr1)

console.assert(JSON.stringify(arr1) === JSON.stringify(arr2))


let a = [1, 2, 3]
let b = ['x', 'y', 'z'];
temp = a
a = b
b = temp
console.log(a)
console.assert(JSON.stringify(a) === JSON.stringify(b))

console.assert(JSON.stringify(a) === JSON.stringify(b))

// question6
let x = a: 'z', b: 2, c: 3},
let y = {a: 'x', b: 'y', c: 1},

x = y
console.log(x)
console.log(y)

const obj1 = { a: 'z', b: 2, c: 3 };
const obj2 = { a: 'x', b: 'y', c: 1 };

let temp = obj1
obj1 = obj2
obj2= temp
console.log(x)
console.log(y)


let a ={a:1, b: 2, c: 3,};
let b = {a:'x', b: 'y', 'c,':};
let temp = a
a = b
b = temp
console.log(a)
console.log(b)
console.assert(JSON.stringify(a) === JSON.stringify(b),'passes message')