const info1 = {
    name: 'chuol',
    age: 26,
}
let age = 'age'
info1[age] = 27
const info2 = {
    name: 'chuol',
    age: 27,
}
console.log(info1);
console.assert(JSON.stringify(info1)===JSON.stringify(info2), 'error')

// using temporary
a=2
b=3
temp = a
a = b
b = temp
console.log(a);
console.log(b);

let array1 = [1,2,3,4]
let array2 = [5,7,8,9,10]
temp = array1
array1 = array2
array2 = temp
console.log(array1)

// desstructuring
a = 10
b = 11
console.log[a, b] = [b,a]
console.log(a)
console.log(b)

a = [1,2,3,4]
b = [5,6,7,8]
[a, b] = [b,a]
console.log(a)


console.assert('one' == 1, 'wrong result')

console.assert('one' === 1, 'wrong result')

console.assert('1' === 1, 'wrong result')

let info = {
    name: 'ahmed',
    age: 26,
}v
info['age'] = 27
console.log(info)
const info3 = {
    name: 'ahmed',
    age: 27,
}
console.assert(JSON.stringify(info) === JSON.stringify(info3), 'fail result')

// using temporary
a = 4
b = 5
temp = a
a = b
b = temp
console.log(a)
















