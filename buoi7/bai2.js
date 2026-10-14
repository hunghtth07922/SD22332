let numbers=[1,6,3,9,5,4,2,7,8];
// tao mang evenNumber chi chua cac so chan tu mang numbers
let evenNumber= numbers.filter(x=x%2===0);
console.log(evenNumber)
let doubleNumber= evenNumber.map(x=>x*2);
console.log(doubleNumber);