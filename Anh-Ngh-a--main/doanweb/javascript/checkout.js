const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartTable = document.getElementById("cartTable");

const totalPrice = document.getElementById("totalPrice");


// ======================
// HIỂN THỊ GIỎ HÀNG
// ======================

function renderCart(){

    cartTable.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        // đổi giá sang số
        const priceNumber =
        parseInt(
            item.price.replace(/\./g, "")
                      .replace(" VND", "")
        );

        const itemTotal =
        priceNumber * item.quantity;

        total += itemTotal;

        cartTable.innerHTML += `

        <tr>

            <td>
                <img src="${item.image}" width="70">
            </td>

            <td>
                ${item.name}
            </td>

            <td>
                ${item.price}
            </td>

            <td>

                <button onclick="decreaseQty(${index})">
                    -
                </button>

                ${item.quantity}

                <button onclick="increaseQty(${index})">
                    +
                </button>

            </td>

            <td>
                ${itemTotal.toLocaleString("vi-VN")} VND
            </td>

            <td>

                <button onclick="removeItem(${index})">
                    Xóa
                </button>

            </td>

        </tr>

        `;

    });

    totalPrice.innerText =
    total.toLocaleString("vi-VN") + " VND";

}


// ======================
// TĂNG SỐ LƯỢNG
// ======================

function increaseQty(index){

    cart[index].quantity++;

    saveCart();

}


// ======================
// GIẢM SỐ LƯỢNG
// ======================

function decreaseQty(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    saveCart();

}


// ======================
// XÓA SẢN PHẨM
// ======================

function removeItem(index){

    cart.splice(index, 1);

    saveCart();

}


// ======================
// LƯU GIỎ HÀNG
// ======================

function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}


// ======================
// THANH TOÁN
// ======================

function checkout(){

    const fullName =
    document.getElementById("fullName");

    const phone =
    document.getElementById("phone");

    const address =
    document.getElementById("address");

    const nameError =
    document.getElementById("nameError");

    const phoneError =
    document.getElementById("phoneError");

    const addressError =
    document.getElementById("addressError");


    // reset lỗi

    nameError.innerText = "";
    phoneError.innerText = "";
    addressError.innerText = "";

    let isValid = true;


    // kiểm tra tên

    if(fullName.value.trim() == ""){

        nameError.innerText =
        "Vui lòng nhập họ tên";

        isValid = false;

    }


    // kiểm tra số điện thoại

    if(phone.value.trim() == ""){

        phoneError.innerText =
        "Vui lòng nhập số điện thoại";

        isValid = false;

    }


    // kiểm tra địa chỉ

    if(address.value.trim() == ""){

        addressError.innerText =
        "Vui lòng nhập địa chỉ";

        isValid = false;

    }


    // nếu lỗi thì không thanh toán

    if(!isValid){

        return;

    }


    // kiểm tra giỏ hàng

    if(cart.length == 0){

        alert("Giỏ hàng đang trống!");

        return;

    }


    alert("Thanh toán thành công!");

    localStorage.removeItem("cart");

    window.location.reload();

}
function goHome(){

    window.location.href =
    "index.html";

}

renderCart();