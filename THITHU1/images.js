// 4. Tạo mảng chứa 5 ảnh
const images = [
    "images/anh1.jpg",
    "images/anh2.jpg",
    "images/anh3.jpg",
    "images/anh4.jpg",
    "images/anh5.jpg"
];

// 5. Tạo các biến cần dùng
let index = 0;      // vị trí ảnh hiện tại (bắt đầu từ 0)
let timer = null;   // lưu bộ chạy tự động

const slide = document.getElementById("slide");
const pageNumber = document.getElementById("pageNumber");

// 6. Viết hàm hiển thị ảnh
function showImage() {
    slide.src = images[index]; // đổi ảnh theo vị trí index
    pageNumber.innerText = (index + 1) + "/" + images.length; // hiển thị số trang (1/5, 2/5,...)
}

// 7. Viết nút Next (ảnh sau)
function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0; // nếu hết ảnh -> quay về ảnh đầu
    }
    showImage();
}

// 8. Viết nút Previous (ảnh trước)
function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1; // nếu đang ở ảnh đầu -> chuyển đến ảnh cuối
    }
    showImage();
}

// 9. Viết nút Auto (chạy tự động)
function startAuto() {
    pauseAuto(); // tránh bấm nhiều lần làm trùng lặp bộ đếm
    timer = setInterval(function() {
        nextImage();
    }, 20); // tự chuyển ảnh sau 2 giây (2000 ms)
}

// 10. Viết nút Pause (dừng tự động)
function pauseAuto() {
    clearInterval(timer); // dừng chạy tự động
    timer = null;         // đặt lại bộ đếm
}