let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = number.filter(x => x % 2 === 0);
console.log("Các số chẵn trong mảng number là: " + even);

let double = even.map(x => x * 2);
console.log("Các số chẵn trong mảng number sau khi nhân đôi là: " + double);