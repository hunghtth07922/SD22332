// Dữ liệu món ăn mẫu
const products = [
    { id: 1, name: "Lạp xưởng nướng đá", price: 15000, category: "hot", image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/lap_xuong_nuong_da_1_ab0672b6a3.png" },
    { id: 2, name: "Trà chanh giã tay", price: 20000, category: "hot", image: "https://media.phunutoday.vn/files/content/2023/11/28/tra-chanh-1621.jpg" },
    { id: 3, name: "Trà đào cam sả", price: 25000, category: "new", image: "https://cdn.khoequan.com/wp-content/uploads/2023/02/17172747/tra-cam-sa-mat-ong.jpg" },
    { id: 4, name: "Mỳ trộn đùi gà", price: 35000, category: "sale", image: "https://cdn.tgdd.vn/2020/10/CookRecipe/GalleryStep/thanh-pham-923.jpg" },
    { id: 5, name: "Bánh gà phô mai", price: 10000, category: "hot", image: "https://tse2.mm.bing.net/th/id/OIP._erico4euccyLmsujxUPkAHaHT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 6, name: "Chân gà sả tắc", price: 30000, category: "new", image: "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2024/3/20/photo-2-17109280910421671942567.jpg" },
    { id: 7, name: "Khoai tây chiên", price: 20000, category: "sale", image: "https://doiduavang.vn/wp-content/uploads/2021/02/khoai-tay-chien.jpg" },
    { id: 8, name: "Trà sữa thái xanh", price: 22000, category: "hot", image: "https://th.bing.com/th/id/OIP.oHLt9x0yu6WcK3RgjDMLhwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 9, name: "Nem chua rán", price: 25000, category: "sale", image: "https://tse1.mm.bing.net/th/id/OIP.ULASyeX-l4JoGx0rN-HZWwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
];

let cart = JSON.parse(localStorage.getItem('cart_cholibi')) || [];
// Danh sách tài khoản đã đăng ký (khởi tạo mảng rỗng nếu chưa có)
let usersList = JSON.parse(localStorage.getItem('users_cholibi')) || [];

// ==========================================
// 1. XỬ LÝ ĐĂNG KÝ / ĐĂNG NHẬP
// ==========================================

function openAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex';
}

function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
    const errLogin = document.getElementById('err-login');
    const errRegister = document.getElementById('err-register');
    if (errLogin) errLogin.innerText = '';
    if (errRegister) errRegister.innerText = '';
}

function switchTab(tab) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('tab-login-btn');
    const registerBtn = document.getElementById('tab-register-btn');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
    }
}

// Xử lý Đăng Ký Tài Khoản Thật
function handleRegister(event) {
    event.preventDefault();
    const uName = document.getElementById('reg-username').value.trim();
    const uPass = document.getElementById('reg-password').value.trim();
    const uConfirm = document.getElementById('reg-confirm-password').value.trim();
    const errEl = document.getElementById('err-register');

    if (uPass !== uConfirm) {
        errEl.innerText = 'Mật khẩu xác nhận không trùng khớp!';
        return false;
    }

    // Kiểm tra tên tài khoản đã tồn tại chưa
    const isExist = usersList.some(user => user.username.toLowerCase() === uName.toLowerCase());
    if (isExist) {
        errEl.innerText = 'Tên tài khoản này đã được sử dụng!';
        return false;
    }

    // Lưu tài khoản mới
    usersList.push({ username: uName, password: uPass });
    localStorage.setItem('users_cholibi', JSON.stringify(usersList));

    alert('🎉 Đăng ký tài khoản thành công! Hãy đăng nhập ngay.');
    document.getElementById('register-form').reset();
    errEl.innerText = '';
    switchTab('login');
    return false;
}

// Xử lý Đăng Nhập
function handleLogin(event) {
    event.preventDefault();
    const uName = document.getElementById('login-username').value.trim();
    const uPass = document.getElementById('login-password').value.trim();
    const errEl = document.getElementById('err-login');

    // Tìm tài khoản trong danh sách đã đăng ký
    const validUser = usersList.find(user => user.username.toLowerCase() === uName.toLowerCase() && user.password === uPass);

    if (validUser) {
        localStorage.setItem('user_cholibi', JSON.stringify({ name: validUser.username }));
        closeAuthModal();
        checkLoginState();
        alert(`🎉 Chào mừng ${validUser.username} đã đăng nhập!`);
    } else {
        errEl.innerText = 'Tài khoản hoặc mật khẩu không chính xác! (Vui lòng Đăng ký nếu chưa có tài khoản)';
    }
    return false;
}

// Kiểm tra và Cập nhật giao diện Đăng nhập
function checkLoginState() {
    const savedUser = JSON.parse(localStorage.getItem('user_cholibi'));
    const userInfoEl = document.getElementById('user-info');

    if (userInfoEl) {
        if (savedUser) {
            userInfoEl.innerHTML = `
                <span class="user-welcome">👋 ${savedUser.name}</span>
                <button class="btn-logout" onclick="handleLogout()">Đăng xuất</button>
            `;
            const fullnameInp = document.getElementById('fullname');
            if (fullnameInp) fullnameInp.value = savedUser.name;
        } else {
            userInfoEl.innerHTML = `
                <button class="btn-login" onclick="openAuthModal()">🔑 Đăng nhập / Đăng ký</button>
            `;
            const fullnameInp = document.getElementById('fullname');
            if (fullnameInp) fullnameInp.value = '';
        }
    }
}

// Đăng xuất
function handleLogout() {
    localStorage.removeItem('user_cholibi');
    checkLoginState();
    alert('Đã đăng xuất thành công!');
}

// ==========================================
// 2. CÁC TÍNH NĂNG KHÁC (MENU, GIỎ HÀNG, SLIDER)
// ==========================================

function renderProducts(filterCategory = 'all', btnElement = null) {
    if (btnElement) {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    const list = document.getElementById('product-list');
    if (!list) return;
    list.innerHTML = '';
    
    const filtered = filterCategory === 'all' 
        ? products 
        : products.filter(p => p.category === filterCategory);

    filtered.forEach(p => {
        list.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString()} VNĐ</p>
                <button class="btn-add" onclick="addToCart(${p.id})">+ Thêm món</button>
            </div>
        `;
    });
}

function searchProducts() {
    const keyword = document.getElementById('search-input').value.toLowerCase().trim();
    const list = document.getElementById('product-list');
    if (!list) return;
    
    if (keyword === '') {
        renderProducts('all');
        return;
    }

    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    list.innerHTML = '';

    if (filtered.length === 0) {
        list.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; margin: 20px 0; font-size: 16px;">
            ❌ Không tìm thấy món ăn nào phù hợp với từ khóa "${keyword}".
        </p>`;
        return;
    }

    filtered.forEach(p => {
        list.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString()} VNĐ</p>
                <button class="btn-add" onclick="addToCart(${p.id})">+ Thêm món</button>
            </div>
        `;
    });
}

// Thêm món vào giỏ (Yêu cầu đăng nhập)
function addToCart(id) {
    const currentUser = localStorage.getItem('user_cholibi');
    
    if (!currentUser) {
        alert('⚠️ Bạn cần đăng nhập để thêm món vào giỏ hàng!');
        openAuthModal();
        return;
    }

    const item = products.find(p => p.id === id);
    const existIndex = cart.findIndex(c => c.id === id);
    
    if (existIndex > -1) {
        cart[existIndex].quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCart();
}

function updateQuantity(id, change) {
    const index = cart.findIndex(c => c.id === id);
    if (index > -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart_cholibi', JSON.stringify(cart));
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    if (!cartItems || !totalEl || !countEl) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Giỏ hàng đang trống.</p>';
        totalEl.innerText = '0';
        countEl.innerText = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span><strong>${item.name}</strong> (${item.price.toLocaleString()} VNĐ)</span>
                <div>
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button onclick="updateQuantity(${item.id}, -${item.quantity})">❌</button>
                </div>
            </div>
        `;
    });

    totalEl.innerText = total.toLocaleString();
    countEl.innerText = count;
}

const banners = [
    "https://picsum.photos/800/300?random=1",
    "https://picsum.photos/800/300?random=2",
    "https://picsum.photos/800/300?random=3"
];
let currentSlide = 0;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + banners.length) % banners.length;
    const img = document.getElementById('slider-img');
    if (img) img.src = banners[currentSlide];
}

// Xác nhận đặt hàng (Yêu cầu đăng nhập & giỏ hàng không trống)
function validateForm(event) {
    event.preventDefault();

    const currentUser = localStorage.getItem('user_cholibi');
    if (!currentUser) {
        alert('⚠️ Bạn cần đăng nhập trước khi tiến hành đặt hàng!');
        openAuthModal();
        return false;
    }

    if (cart.length === 0) {
        alert('🛒 Giỏ hàng của bạn đang trống! Vui lòng chọn món trước khi đặt.');
        return false;
    }

    let isValid = true;
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!fullname) {
        document.getElementById('err-fullname').innerText = 'Vui lòng nhập họ tên người nhận!';
        isValid = false;
    } else {
        document.getElementById('err-fullname').innerText = '';
    }

    if (!email) {
        document.getElementById('err-email').innerText = 'Vui lòng nhập số điện thoại hoặc email!';
        isValid = false;
    } else {
        document.getElementById('err-email').innerText = '';
    }

    if (isValid) {
        alert('🎉 Đặt hàng thành công! Đơn hàng của bạn đang được xử lý.');
        cart = [];
        updateCart();
        document.getElementById('contact-form').reset();
    }
    return false;
}

function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    setInterval(() => {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        const timerEl = document.getElementById('timer');
        if (timerEl) {
            timerEl.innerText = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        if (--timer < 0) timer = durationInSeconds;
    }, 1000);
}

window.onload = function() {
    renderProducts();
    updateCart();
    checkLoginState();
    startCountdown(7200);
};