const products = [

    {
        id: 1,
        name: "Hạt Chia Úc EPCO Foods",
        price: "93.600 VND",
        oldPrice: "120.000 VND",
        image: "../img/hatchia.png",

        description: `
Hạt Chia Úc EPCO Foods là sản phẩm dinh dưỡng cao cấp nhập khẩu từ Úc,
giàu Omega 3, chất xơ và protein tự nhiên.

Sản phẩm hỗ trợ giảm cân, tốt cho tim mạch và hệ tiêu hóa.
Có thể dùng cùng sữa chua, sinh tố hoặc nước ép mỗi ngày.
        `,

        brand: "EPCO Foods",
        origin: "Úc",
        ingredient: "100% hạt chia tự nhiên",
        weight: "1kg",
        stock: 87,
        discount: "-22%"
    },

    {
        id: 2,
        name: "Hạt Chia Absolute",
        price: "93.500 VND",
        oldPrice: "110.000 VND",
        image: "../img/hatchia2.png",

        description: `
Hạt Chia Absolute chứa nhiều vitamin và khoáng chất cần thiết cho cơ thể.

Sản phẩm giúp bổ sung năng lượng, hỗ trợ đẹp da
và cải thiện sức khỏe.
        `,

        brand: "Absolute",
        origin: "Úc",
        ingredient: "Hạt chia hữu cơ",
        weight: "500g",
        stock: 65,
        discount: "-15%"
    },

    {
        id: 3,
        name: "Hạt Chia Đen Black Bag",
        price: "81.000 VND",
        oldPrice: "90.000 VND",
        image: "../img/hatchia3.png",

        description: `
Hạt Chia Đen Black Bag giàu chất chống oxy hóa,
hỗ trợ hệ tiêu hóa và tim mạch.

Phù hợp dùng với salad, yến mạch hoặc đồ uống healthy.
        `,

        brand: "Black Bag",
        origin: "Mỹ",
        ingredient: "Hạt chia đen tự nhiên",
        weight: "500g",
        stock: 52,
        discount: "-10%"
    },

    {
        id: 4,
        name: "Biscotti Healthy",
        price: "91.200 VND",
        oldPrice: "120.000 VND",
        image: "../img/Biscotti.png",

        description: `
Biscotti Healthy là dòng bánh ít đường,
nhiều chất xơ và phù hợp cho chế độ ăn healthy.

Bánh giòn thơm, chứa nhiều loại hạt dinh dưỡng.
        `,

        brand: "Healthy Food",
        origin: "Việt Nam",
        ingredient: "Yến mạch, hạnh nhân, hạt bí",
        weight: "300g",
        stock: 41,
        discount: "-24%"
    },

    {
        id: 5,
        name: "Bánh Rong Biển",
        price: "51.000 VND",
        oldPrice: "60.000 VND",
        image: "../img/rongbien.png",

        description: `
Bánh rong biển giòn ngon với hương vị hấp dẫn,
phù hợp cho cả người lớn và trẻ em.

Sản phẩm cung cấp nhiều khoáng chất và vitamin.
        `,

        brand: "Sea Snack",
        origin: "Hàn Quốc",
        ingredient: "Rong biển, mè, dầu thực vật",
        weight: "250g",
        stock: 70,
        discount: "-15%"
    },

    {
        id: 6,
        name: "Yến Mạch Nguyên Chất",
        price: "75.000 VND",
        oldPrice: "95.000 VND",
        image: "../img/yenmach.png",

        description: `
Yến mạch nguyên chất hỗ trợ giảm cân,
tốt cho hệ tiêu hóa và tim mạch.

Có thể dùng để nấu cháo hoặc làm overnight oats.
        `,

        brand: "Organic Oats",
        origin: "Úc",
        ingredient: "100% yến mạch nguyên chất",
        weight: "1kg",
        stock: 56,
        discount: "-20%"
    },

    {
        id: 7,
        name: "Hạt Óc Chó Mỹ",
        price: "145.000 VND",
        oldPrice: "170.000 VND",
        image: "../img/occho.png",

        description: `
Hạt óc chó Mỹ chứa nhiều Omega 3,
tốt cho trí não và tim mạch.

Đây là món ăn vặt dinh dưỡng được nhiều người yêu thích.
        `,

        brand: "USA Walnut",
        origin: "Mỹ",
        ingredient: "Hạt óc chó tự nhiên",
        weight: "500g",
        stock: 38,
        discount: "-15%"
    },

    {
        id: 8,
        name: "Ngũ Cốc Dinh Dưỡng",
        price: "88.000 VND",
        oldPrice: "105.000 VND",
        image: "../img/ngucoc.png",

        description: `
Ngũ cốc dinh dưỡng bổ sung vitamin và khoáng chất,
thích hợp dùng vào bữa sáng hoặc sau tập luyện.

Sản phẩm giúp cung cấp năng lượng cho cơ thể.
        `,

        brand: "Healthy Mix",
        origin: "Việt Nam",
        ingredient: "Đậu đỏ, mè đen, yến mạch",
        weight: "500g",
        stock: 49,
        discount: "-16%"
    }

];

// ======================
// LẤY ID URL
// ======================

const params =
new URLSearchParams(window.location.search);

const id = params.get("id");

const product =
products.find(p => p.id == id);

const detailContainer =
document.getElementById("detailContainer");


// ======================
// HIỂN THỊ CHI TIẾT
// ======================

if(product){

    detailContainer.innerHTML = `

    <div class="detail-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="info">

            <h1>${product.name}</h1>

            <div class="price-box">

                <span class="price">
                    ${product.price}
                </span>

                <span class="old-price">
                    ${product.oldPrice}
                </span>

                <span class="discount">
                    ${product.discount}
                </span>

            </div>

            <p class="stock">
                ● Còn lại: ${product.stock}
            </p>

            <p class="description">
                ${product.description}
            </p>

            <div class="info-list">

                <p>
                    <b>Thương hiệu:</b>
                    ${product.brand}
                </p>

                <p>
                    <b>Xuất xứ:</b>
                    ${product.origin}
                </p>

                <p>
                    <b>Thành phần:</b>
                    ${product.ingredient}
                </p>

                <p>
                    <b>Khối lượng:</b>
                    ${product.weight}
                </p>

            </div>

            <div class="quantity-cart">

                <input 
                    type="number"
                    id="quantity"
                    value="1"
                    min="1"
                >

                <button 
                    class="add-cart"
                    onclick="addToCart()"
                >
                    Thêm vào giỏ hàng
                </button>

            </div>

            <button 
                class="buy-now"
                onclick="buyNow()"
            >
                Mua ngay
            </button>

        </div>

    </div>

    `;

}else{

    detailContainer.innerHTML = `
        <h2>Không tìm thấy sản phẩm</h2>
    `;

}


// ======================
// GIỎ HÀNG
// ======================

let cart =
JSON.parse(localStorage.getItem("cart")) || [];


// ======================
// THÊM GIỎ HÀNG
// ======================

function addToCart(){

    const quantity =
    parseInt(
        document.getElementById("quantity").value
    );

    const existingItem =
    cart.find(item => item.id == product.id);

    if(existingItem){

        existingItem.quantity += quantity;

    }else{

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Đã thêm vào giỏ hàng!");

}


// ======================
// MUA NGAY
// ======================

function buyNow(){

    addToCart();

    window.location.href =
    "checkout.html";

}
function goHome(){

    window.location.href =
    "index.html";

}