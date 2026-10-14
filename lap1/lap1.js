// Bài 1
let studentID = "PS12345"
let fullName = "Hoàng Tuấn Hưng"
let dateOfBirth = "25/11/2009"
let placeOfBirth = "Hanoi"
let major = "InformatInformation Technology"
console.log(studentID);
console.log(fullName);
console.log(dateOfBirth);
console.log(placeOfBirth);
console.log(major);

// Bài 2


let salary = 1000.5
 // Kiểu dữ liệu Number, khai báo let là phù hợp nếu biến thể có thể thay đổi
//var isActive = true
let isActive = true
 // Kiểu dữ liệu Boolean, nên dùng let hoặc const thay cho var để tránh lỗi logic
let nothing = null
 // Kiểu dữ liệu object
 // nếu giá trị của biến có thể thay đổi thì nên dùng let, nếu không có thể dùng const
const notDefind = undefined
 // Kiểu dữ liệu underfind, biểu thị biến chưa được xác định giá trị
 // Có thể khai báo 'let notDefined' nếu muốn biến mặc định có giá trị undefined


// Bài 3
console.log("10" + 5);  
// kết quả ko như mong đợi 
// Dấu + có 2 phép: cộng là để cộng số (10 + 5 = 15) hoặc ghép vào như("hà" + "nội" = hànội)
// sửa lại

console.log("10" - 5);
//Dấu - có 1 phép duy nhất là trừ toán học

console.log(Number("20"));     
// ép rõ dàng sang số, trả về 20

console.log(String(123));      
// ép rõ ràng sang chuỗi, trả về 123

console.log(Boolean(""));      
// dòng này là chuỗi rỗng, ép sang kiểu boolean
//nên hiển thị là false

console.log(+"123");
// Dấu + đặt ngay trc chuỗi tương đương Number("123"), giupws chuyển nhanh chuỗi thành số 123