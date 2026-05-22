document.addEventListener("DOMContentLoaded", () => {
    initCartBadge();

    if (document.querySelector(".product-grid")) {
        handleAddToCart();
    }

    if (document.querySelector(".product-detail-container")) {
        handleProductDetailPage();
    }

    if (document.querySelector(".cart-container")) {
        handleCartPage();
    }
});

function getCartItems() {
    return JSON.parse(localStorage.getItem("shop_cart_items")) || [];
}

function saveCartItems(items) {
    localStorage.setItem("shop_cart_items", JSON.stringify(items));
    updateCartBadge();
}

function initCartBadge() {
    updateCartBadge();
}

function updateCartBadge() {
    const badges = document.querySelectorAll(".cart-icon .badge");
    const items = getCartItems();
    const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
        badge.textContent = totalQty;
    });
}

function handleAddToCart() {
    const grid = document.querySelector(".product-grid");
    
    grid.addEventListener("click", (e) => {
        const btn = e.target.closest(".add-to-cart-btn");
        if (!btn) return;
        
        e.stopPropagation();
        
        const card = btn.closest(".product-card");
        const title = card.querySelector(".title").textContent;
        const priceText = card.querySelector(".current-price").textContent;
        const price = parseInt(priceText.replace(/[^0-9]/g, ""));
        const img = card.querySelector(".product-img img").src;

        let cartItems = getCartItems();
        let existingItem = cartItems.find(item => item.title === title && item.size === "40");

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                title: title,
                price: price,
                img: img,
                size: "40",
                quantity: 1
            });
        }

        saveCartItems(cartItems);
        alert(`Đã thêm "${title}" vào giỏ hàng!`);
    });
}

function handleProductDetailPage() {
    const thumbImages = document.querySelectorAll(".thumb-images img");
    const mainImg = document.getElementById("MainImg");

    thumbImages.forEach(thumb => {
        thumb.addEventListener("click", () => {
            thumbImages.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            mainImg.src = thumb.src;
        });
    });

    const sizeBtns = document.querySelectorAll(".size-btn");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    const qtyInput = document.querySelector(".qty-input");
    const qtyBtns = document.querySelectorAll(".qty-btn");

    qtyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let val = parseInt(qtyInput.value) || 1;
            if (btn.textContent === "+") {
                val++;
            } else if (btn.textContent === "-" && val > 1) {
                val--;
            }
            qtyInput.value = val;
        });
    });

    const btnAddCart = document.querySelector(".btn-add-cart");
    if (btnAddCart) {
        btnAddCart.removeAttribute("onclick");
        btnAddCart.addEventListener("click", () => {
            const title = document.querySelector(".detail-info h1").textContent;
            const priceText = document.querySelector(".detail-info .current-price").textContent;
            const price = parseInt(priceText.replace(/[^0-9]/g, ""));
            const img = mainImg.src;
            const size = document.querySelector(".size-btn.active").textContent;
            const quantity = parseInt(qtyInput.value) || 1;

            let cartItems = getCartItems();
            let existingItem = cartItems.find(item => item.title === title && item.size === size);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cartItems.push({ title, price, img, size, quantity });
            }

            saveCartItems(cartItems);
            window.location.href = "cart.html";
        });
    }
}

function handleCartPage() {
    renderCartTable();

    const tableBody = document.querySelector(".cart-table tbody");
    
    tableBody.addEventListener("click", (e) => {
        const removeBtn = e.target.closest(".remove-btn");
        if (removeBtn) {
            const index = removeBtn.getAttribute("data-index");
            let cartItems = getCartItems();
            cartItems.splice(index, 1);
            saveCartItems(cartItems);
            renderCartTable();
            return;
        }
    });

    tableBody.addEventListener("change", (e) => {
        if (e.target.classList.contains("cart-qty-input")) {
            const index = e.target.getAttribute("data-index");
            let val = parseInt(e.target.value) || 1;
            if (val < 1) val = 1;
            e.target.value = val;

            let cartItems = getCartItems();
            cartItems[index].quantity = val;
            saveCartItems(cartItems);
            renderCartTable();
        }
    });
}

function renderCartTable() {
    const tableBody = document.querySelector(".cart-table tbody");
    const cartItems = getCartItems();
    
    if (cartItems.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px 0;">Giỏ hàng của bồ đang trống trơn rồi! Hãy quay lại lựa giày nhé.</td></tr>`;
        document.querySelector(".cart-summary Strong").textContent = "0đ";
        document.querySelector(".summary-row.total span:last-child").textContent = "0đ";
        return;
    }

    let html = "";
    let subtotal = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        html += `
            <tr>
                <td>
                    <div class="cart-item">
                        <img src="${item.img}" alt="${item.title}">
                        <div class="cart-item-info">
                            <h4>${item.title}</h4>
                            <span>Size: ${item.size}</span>
                        </div>
                    </div>
                </td>
                <td>${item.price.toLocaleString("vi-VN")}đ</td>
                <td>
                    <input type="number" class="qty-input cart-qty-input" data-index="${index}" value="${item.quantity}" min="1" style="width:60px;">
                </td>
                <td style="font-weight:700;">${itemTotal.toLocaleString("vi-VN")}đ</td>
                <td><button class="remove-btn" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;
    document.querySelector(".cart-summary Strong").textContent = subtotal.toLocaleString("vi-VN") + "đ";
    document.querySelector(".summary-row.total span:last-child").textContent = subtotal.toLocaleString("vi-VN") + "đ";
}