// Khai báo mảng
let fruits=["Táo","Cam","Đào"];
let numbers=new Array(4,1,7,6,3);
console.log(fruits);
// Truy cập đến phần tử mảng
console.log(fruits[1]);
console.log("Độ dài của mảng fruits: ",fruits.length);
console.log("Độ dài của mảng numbers: ",numbers.length);
console.log("Các số lẻ là");
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!==0){
        console.log(numbers[i]);
    }
}
// Thêm một phần tử vào cuối bảng
console.log(fruits);
fruits=fruits.push("Lê");
console.log(fruits);
// Thêm một phần tử đầu vào mảng
fruits.unshift("Mận");
console.log(fruits);
fruits.shift();
fruits.pop();
console.log(fruits);
