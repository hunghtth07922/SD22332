//Bài 1
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// Bai 2
let kWh = 335;
let tienDien = 0;

if (kWh <= 50) {
    tienDien = kWh * 1800;
} else if (kWh <= 100) {
    tienDien = 50 * 1800 + (kWh - 50) * 2300;
} else {
    tienDien = 50 * 1800 + 50 * 2300 + (kWh - 100) * 3000;
}
console.log("Tien dien:", tienDien, "dong");


// Khi tien dien la 910000 dong
let tienDien2 = 910000;
let soDien;

if (tienDien2 <= 50 * 1800) {
    soDien = tienDien2 / 1800;
} else if (tienDien2 <= 50 * 1800 + 50 * 2300) {
    soDien = 50 + (tienDien2 - 50 * 1800) / 2300;
} else {
    soDien = 100 + (tienDien2 - 50 * 1800 - 50 * 2300) / 3000;
}
console.log("So dien:", soDien, "kWh");

// Bai 3
let chucVu = "staff";
let ngayCong = 24;
let heSo;

switch (chucVu) {
    case "intern":
        heSo = 1.0;
        break;
    case "staff":
        heSo = 1.5;
        break;
    case "senior":
        heSo = 2.0;
        break;
    case "manager":
        heSo = 3.0;
        break;
    default:
        heSo = 0;
        console.log("Chuc vu khong hop le");
}

if (heSo > 0) {
    let luong = heSo * ngayCong * 5000000 / 24;
    console.log("Luong:", luong, "dong");
}

// Bai 4
function chuanHoaCau(cau) {
    cau = cau.trim().replace(/\s+/g, " ");
    cau = cau.toLowerCase().replace(/\b\w/g, function (chu) {
        return chu.toUpperCase();
    });
    cau = cau.replace(/\s+([.!?,])/g, "$1");
    cau = cau.replace(/([.!?])([A-Za-zÀ-ỹ])/g, "$1 $2");

    return cau;
}

let cau = "   xin chao   cac ban.    hom nay   troi dep qua   !toi   di hoc ve ? ";
console.log(chuanHoaCau(cau));

// Bai 5
function calculator(a, b, phepTinh) {
    switch (phepTinh) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if (b === 0) {
                return "Không thể chia cho 0";
            }
            return a / b;
            break;
        default:
            return "Phép tính không hợp lệ";
            break;
    }
}

let a = 99;
let b = 5;
let phepTinh = "*";

console.log("Kết quả:", calculator(a, b, phepTinh));