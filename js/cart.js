
let cart = JSON.parse(window.localStorage.getItem("cart")); 

function GetParam(param) {
    const LinkParam = new URLSearchParams(window.location.search);
    return LinkParam.get(param);
}

const Id = GetParam("id");

const list = document.getElementById("products-list");

cart.forEach(product => {
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
    pDesc.className = `products-list-desc`;
    pDesc.textContent = product.description;
    divWrapper.appendChild(pDesc);

    const pPrice = document.createElement("p");
    pPrice.className = `products-list-price`;
    pPrice.textContent = "£" + product.price;
    divWrapper.appendChild(pPrice);

    const divContainer = document.createElement("div");
    divContainer.className = `products-container`;
    newLi.appendChild(divContainer);

    const btnFirst = document.createElement("button");
    btnFirst.classList = `products-btn`;
    divContainer.appendChild(btnFirst);

    const span = document.createElement("span");
    span.textContent = `1`;
    divContainer.appendChild(span);

    const btnSec = document.createElement("button");
    btnSec.classList = `products-btn`;
    divContainer.appendChild(btnSec);

    const pListPrice = document.createElement("p");
    pListPrice.classList = `products-list-price-desc`;
    pListPrice.textContent = "£" + product.price;
    newLi.appendChild(pListPrice);

    imgList.src = product.img;
    sourceWebpList.srcset = `${product.imageWebp}`;
    sourceJpegList.srcset = `${product.imageJpeg}`;
});

let totalValue = 0;

for (let i = 0; i < cart.length; i++){
    totalValue += parseFloat(cart[i].price);
    let total = document.getElementById("total").textContent = "£" + totalValue;
}
