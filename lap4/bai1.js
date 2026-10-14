let shop = ["Thịt", "Rau", "Cá", "Trứng"];

console.log("Số lượng mặt hàng trong cửa hàng là: " + shop.length);

shop.push("Sữa");
console.log(shop);

shop.unshift("Bánh mì");
console.log(shop);

let removedItem = shop.pop();
console.log("Mặt hàng vừa bị xóa là: " + removedItem);
console.log("Mặt hàng số 3 trong cửa hàng là: " + shop[2]);