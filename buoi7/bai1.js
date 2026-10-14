let shoppingList=["Trứng","Thịt","Rau"];
// in ra số lượng mặt hàng ban đầu trong danh sách
console.log("Số phần tử trong danh sách là: ",shoppingList.length);
// Thêm mặt hàng sữa vào cuối
shoppingList.push("Sữa");
console.log(shoppingList);
// Thêm bánh mì vào đầu danh sách
shoppingList.unshift("Bánh mì");
console.log(shoppingList);
let remoItem=shoppingList.pop();
console.log(remoItem);
console.log("Mặt hàng thứ 2 là: ",shoppingList[1]);