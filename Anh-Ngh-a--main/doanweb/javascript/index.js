const products = [

    {
        id:1,
        name: "Hạt Chia Úc EPCO Foods",
        price: "93.600 VND",
        oldPrice: "120.000 VND",
        discount: "-22%",
        image: "../img/hatchia.png"
    },

    {
        id:2,
        name: "Hạt Chia Absolute",
        price: "93.500 VND",
        oldPrice: "110.000 VND",
        discount: "-15%",
        image: "../img/hatchia2.png"
    },

    {
        id:3,
        name: "Hạt Chia Đen Black Bag",
        price: "81.000 VND",
        oldPrice: "90.000 VND",
        discount: "-10%",
        image: "../img/hatchia3.png"
    },

    {
        id:4,
        name: "Biscotti Healthy",
        price: "91.200 VND",
        oldPrice: "120.000 VND",
        discount: "-24%",
        image: "../img/Biscotti.png"
    },

    {
        id:5,
        name: "Bánh Rong Biển",
        price: "51.000 VND",
        oldPrice: "60.000 VND",
        discount: "-15%",
        image: "../img/rongbien.png"
    },

    {
        id:6,
        name: "Yến Mạch Nguyên Chất",
        price: "75.000 VND",
        oldPrice: "95.000 VND",
        discount: "-20%",
        image: "../img/yenmach.png"
    },

    {
        id:7,
        name: "Hạt Óc Chó Mỹ",
        price: "145.000 VND",
        oldPrice: "170.000 VND",
        discount: "-15%",
        image: "../img/occho.png"
    },

    {
        id:8,
        name: "Ngũ Cốc Dinh Dưỡng",
        price: "88.000 VND",
        oldPrice: "105.000 VND",
        discount: "-16%",
        image: "../img/ngucoc.png"
    }

];


// ========================
// HIỂN THỊ SẢN PHẨM
// ========================

const productGrid = document.getElementById("productGrid");

products.forEach(product => {

    productGrid.innerHTML += `

        <div class="product-card">

            <img 
                src="${product.image}"
                onclick="goToDetail(${product.id})"
            >

            <h3>${product.name}</h3>

            <p class="price">${product.price}</p>

            <p class="old-price">${product.oldPrice}</p>

            <button 
                class="add-cart-btn"
                onclick="addToCart(${product.id})"
            >
                <i class="fa fa-shopping-cart"></i>
                Thêm giỏ hàng
            </button>

        </div>

    `;

});


// ========================
// CHUYỂN TRANG CHI TIẾT
// ========================

function goToDetail(id){

    window.location.href =
    `product-detail.html?id=${id}`;

}


// ========================
// GIỎ HÀNG
// ========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// cập nhật số lượng giỏ hàng

function updateCartCount(){

    const cartCount =
    document.querySelector(".cart span");

    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    cartCount.innerText = total;

}

updateCartCount();


// thêm vào giỏ

function addToCart(id){

    const product =
    products.find(p => p.id == id);

    const existingItem =
    cart.find(item => item.id == id);

    if(existingItem){

        existingItem.quantity++;

    }else{

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("Đã thêm vào giỏ hàng!");

}


// ========================
// CLICK ICON GIỎ HÀNG
// ========================

const cartIcon = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {

    window.location.href =
    "checkout.html";

});


// ========================
// BANNER SLIDE
// ========================

const banners = [
    "../img/slider1.jpg",
    "../img/slider2.jpg",
    "../img/slider3.jpg",
];

let currentBanner = 0;

const bannerImage =
document.getElementById("bannerImage");

setInterval(() => {

    currentBanner++;

    if(currentBanner >= banners.length){

        currentBanner = 0;

    }

    bannerImage.src =
    banners[currentBanner];

}, 3000);
function goToLab(){

    window.location.href =
    "labth.html";

}