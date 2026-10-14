const products = [ 
    { name: "Laptop", price: 1200 }, 
    { name: "Mouse", price: 30 }, 
    { name: "Keyboard", price: 75 }, 
    { name: "Monitor", price: 300 }, 
];

// a. Sắp xếp mảng products theo thứ tự giá tăng dần (từ thấp đến cao). 
const sortedProducts = products.sort((a, b) => a.price - b.price);

// b. In ra mảng sản phẩm đã được sắp xếp 
console.log("Mảng sản phẩm theo thứ tự giá tăng dần: ", sortedProducts);