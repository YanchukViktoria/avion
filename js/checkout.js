
let user = JSON.parse(localStorage.getItem("user")) || [];

let cart = JSON.parse(window.localStorage.getItem("cart")); 

function GetParam(param) {
    const LinkParam = new URLSearchParams(window.location.search);
    return LinkParam.get(param);
}

const Id = GetParam("id");

const list = document.getElementById("products-list");

cart.forEach(product => {
    console.log("pp");
    const newLi = document.createElement('li');
    newLi.className = `products-list-item`;
    list.appendChild(newLi);

    const pictureList = document.createElement("picture");
    pictureList.classList = `picture`;
    pictureList.id = `picture-${product.id}`;
    newLi.appendChild(pictureList);

    const sourceWebpList = document.createElement("source");
    sourceWebpList.media = `min-width:1440px`;
    sourceWebpList.classList = `source-webp`;
    sourceWebpList.srcset = ` `;
    sourceWebpList.type = `image/webp`;
    pictureList.appendChild(sourceWebpList);

    const sourceJpegList = document.createElement("source");
    sourceJpegList.media = `min-width:1440px`;
    sourceJpegList.classList = `source-jpeg`;
    sourceJpegList.srcset = ` `;
    sourceJpegList.type = `image/jpeg`;
    pictureList.appendChild(sourceJpegList);

    const imgList = document.createElement("img");
    imgList.classList = `product-img-bacet`;
    imgList.src = ' ';
    imgList.width = `109`;
    imgList.height = `134`;
    pictureList.appendChild(imgList);

    const divWrapper = document.createElement("div");
    divWrapper.className = `products-wrapper`;
    newLi.appendChild(divWrapper);

    const pTitle = document.createElement("p");
    pTitle.className = `products-list-title`;
    pTitle.textContent = product.name;
    divWrapper.appendChild(pTitle);

    const pDesc = document.createElement("p");
    pDesc.classList = `products-list-desc products-list-desc-checkout`;
    pDesc.textContent = product.description;
    divWrapper.appendChild(pDesc);

    const pPrice = document.createElement("p");
    pPrice.className = `products-list-price`;
    pPrice.textContent = "£" + product.price;
    divWrapper.appendChild(pPrice);

    imgList.src = product.img;
    sourceWebpList.srcset = `${product.imageWebp}`;
    sourceJpegList.srcset = `${product.imageJpeg}`;
});

console.log(cart);

const btn = document.getElementById("submit-btn");
const mail = document.getElementById("email");
const phone = document.getElementById("phone");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

btn.addEventListener("click", Submit);

const orderId = generateOrderId();

function generateOrderId() {
    const now = new Date();
    return now.getFullYear().toString() +
        (now.getMonth() + 1).toString().padStart(2, '0') +
        now.getDate().toString().padStart(2, '0');
}

const fields = [btn, mail, phone, firstName, lastName]

function Submit() {
    for (let i = 0; i < fields.length; i++){
        if (!fields[i].value) {
            fields[i].focus();
        }
        if (fields[i].value && fields[i +1].value && fields[i+2].value && fields[i+3].value) {
            let user = JSON.parse(localStorage.getItem('user')) || [];
            user.push({
                mail: mail.value,
                phone: phone.value,
                firstName: firstName.value,
                lastName: lastName.value,
                order: orderId
            });
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = './thanks.html?orderId=' + orderId;
        }
    }
}

console.log(orderId);
///


let totalValue = 0;

for (let i = 0; i < cart.length; i++){
    totalValue += parseFloat(cart[i].price);
    let SubTotal = document.getElementById("cost-list-price").textContent = "£" + totalValue;
}


///

let shipping = document.getElementById("cost-list-price-shipping");

if (totalValue <= 300) {
    shipping.textContent = "£" + 10;
} else if (totalValue >= 300) {
    shipping.textContent = "£" + 20;
}

const total = document.getElementById("total");

if (totalValue <= 300) {
    total.textContent = totalValue + 10;
} else if (totalValue >= 300) {
    total.textContent = totalValue + 20;
}


///
const select = document.getElementById("checkout-select");
const optionCard = document.getElementById("checkout-select-card");
const formContainer = document.getElementById("form-container")

const div = document.createElement("div");
div.className = "card-container";
div.style.backgroundColor = 'rgba(249, 249, 249, 1)';
div.style.maxWidth = '600px';
div.style.marginBottom = '40px';
div.style.display = 'none'; 
formContainer.appendChild(div);

select.insertAdjacentElement('afterend', div);

const cardNum = document.createElement("input");
cardNum.className = 'focused-element-dynamic';
cardNum.style.minWidth = '400px';
cardNum.placeholder = 'Card number';
cardNum.style.backgroundColor ='inherit';
cardNum.style.border = 'none';
cardNum.style.padding = '17px 20px';
div.appendChild(cardNum);

const cardYear = document.createElement("input");
cardYear.className = 'focused-element-dynamic';
cardYear.style.maxWidth = '100px';
cardYear.placeholder = 'MM/YY';
cardYear.style.backgroundColor ='inherit';
cardYear.style.border = 'none';
cardYear.style.padding = '17px 20px';
div.appendChild(cardYear);

const cardCvc = document.createElement("input");
cardCvc.className = 'focused-element-dynamic';
cardCvc.style.maxWidth = '100px';
cardCvc.placeholder = 'CVC';
cardCvc.style.backgroundColor ='inherit';
cardCvc.style.border = 'none';
cardCvc.style.padding = '17px 20px';
div.appendChild(cardCvc);

select.addEventListener("change", function() {
    if (select.value === "Card") {
        div.style.display = 'block'; 
    } else {
        div.style.display = 'none'; 
    }
});