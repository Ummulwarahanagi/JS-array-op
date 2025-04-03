let numbers=[10,5,8,3,12,6];
console.log("The array is :"+numbers)
console.log("Length of the array:"+numbers.length)
numbers.push(7)
console.log("number 7 added to array:"+numbers)
numbers.shift()
console.log("removing first element from the array",numbers)
numbers.sort((a,b)=>a-b)
console.log("Array sorted in ascending order:",numbers)
console.log("Reversed array :",numbers.reverse(true))
console.log(numbers.includes(8)?"Number 8 exits":"Number 8 does not exits");
console.log("Index of number 12 is :",numbers.indexOf(12))
let doubledNumbers=numbers.map(num=>num*2)
console.log("Doubled array is :",doubledNumbers)

