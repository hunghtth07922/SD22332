
// Bai 1
let n = 10;

if (n % 2 == 0) {
    console.log(n + " la so chan");
} else {
    console.log(n + " la so le");
}

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
for (let i = 2; i <= 9; i++) {
    console.log("Bang cuu chuong", i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}

// Bai 5
let so = 17;
let laSoNguyenTo = true;

if (so < 2 || !Number.isInteger(so)) {
    laSoNguyenTo = false;
} else {
    for (let i = 2; i < so; i++) {
        if (so % i == 0) {
            laSoNguyenTo = false;
            break;
        }
    }
}

if (laSoNguyenTo) {
    console.log(so + " la so nguyen to");
} else {
    console.log(so + " khong phai so nguyen to");
}