const products = [
    {
        id: '1',
        name: 'The Dandy Chair',
        description: 'Beautiful and simple this is one for the classics collections',
        price: '250',
        img: './main/mb/main/listing-chair-dandy-main-mb-3x.jpg',
        imageDescWebp: {
            DPR1: '/main/desc-webp/mian-webp/listing-chair-main-desc-1x.webp',
            DPR2: '/main/desc-webp/mian-webp/listing-chair-main-desc-2x.webp',
            DPR3: '/main/desc-webp/mian-webp/listing-chair-main-desc-3x.webp'
        },
        imageMbJpeg: {
            DPR1: './main/mb/main/listing-chair-dandy-main-mb-1x.jpg',
            DPR2: './main/mb/main/listing-chair-dandy-main-mb-2x.jpg',
            DPR3: './main/mb/main/listing-chair-dandy-main-mb-3x.jpg'
        },
        imageMbWebp: {
            DPR1: './main/mb-webp/main-webp/listing-chair-dandy-main-mb-1x.webp',
            DPR2: './main/mb-webp/main-webp/listing-chair-dandy-main-mb-2x.webp',
            DPR3: './main/mb-webp/main-webp/listing-chair-dandy-main-mb-3x.webp'
        },
        imageDescJpeg: {
            DPR1: '/main/desc/main/listing-chair-main-desc-1x.jpg',
            DPR2: '/main/desc/main/listing-chair-main-desc-2x.jpg',
            DPR3: '/main/desc/main/listing-chair-main-desc-3x.jpg'
        }
    },
    {
        id: '2',
        name: 'Rustic Vase Set',
        description: 'Beautiful and simple this is one for the classics collections',
        price: '155',
        img: './main/desc/main/listing-vase-rustic-desc-3x.jpg',
        imageMbWebp: {
            DPR1: './main/mb-webp/main-webp/listing-vase-rustic-mb-1x.webp',
            DPR2: './main/mb-webp/main-webp/listing-vase-rustic-mb-2x.webp',
            DPR3: './main/mb-webp/main-webp/listing-vase-rustic-mb-3x.webp'
        },
        imageMbJpeg: {
            DPR1: './main/desc/main/listing-vase-rustic-desc-1x.jpg',
            DPR2: './main/desc/main/listing-vase-rustic-desc-2x.jpg',
            DPR3: './main/desc/main/listing-vase-rustic-desc-3x.jpg'
        },
        imageDescWebp: {
            DPR1: './main/desc-webp/mian-webp/listing-vase-rustic-desc-1x.webp',
            DPR2: './main/desc-webp/mian-webp/listing-vase-rustic-desc-2x.webp',
            DPR3: './main/desc-webp/mian-webp/listing-vase-rustic-desc-3x.webp'
        },
        imageDescJpeg: {
            DPR1: './main/mb/main/listing-vase-rustic-mb-1x.jpg',
            DPR2: './main/mb/main/listing-vase-rustic-mb-2x.jpg',
            DPR3: './main/mb/main/listing-vase-rustic-mb-3x.jpg'
        }
    },
    {
        id: '3',
        name: 'The Silky Vase',
        description: 'Beautiful and simple this is one for the classics collections',
        price: '125',
        img: './main/mb/main/listing-vase-silky-mb-3x.jpg',
        imageMbWebp: {
            DPR1: './main/mb-webp/main-webp/listing-vase-silky-mb-1x.webp',
            DPR2: './main/mb-webp/main-webp/listing-vase-silky-mb-2x.webp',
            DPR3: './main/mb-webp/main-webp/listing-vase-silky-mb-3x.webp'
        },
        imageMbJpeg: {
            DPR1: './main/mb/main/listing-vase-silky-mb-1x.jpg',
            DPR2: './main/mb/main/listing-vase-silky-mb-2x.jpg',
            DPR3: './main/mb/main/listing-vase-silky-mb-3x.jpg'
        },
        imageDescWebp: {
            DPR1: './main/desc-webp/mian-webp/listing-vase-silky-desc-1x.webp',
            DPR2: './main/desc-webp/mian-webp/listing-vase-silky-desc-2x.webp',
            DPR3: './main/desc-webp/mian-webp/listing-vase-silky-desc-3x.webp'
        },
        imageDescJpeg: {
            DPR1: './main/desc/main/listing-vase-silky-desc-1x.jpg',
            DPR2: './main/desc/main/listing-vase-silky-desc-2x.jpg',
            DPR3: './main/desc/main/listing-vase-silky-desc-3x.jpg'
        }
    },
    {
        id: '4',
        name: 'The Lucy Lamp',
        description: 'Beautiful and simple this is one for the classics collections',
        price: '399',
        img: './main/mb/main/listing-lamp-lucy-mb-3x.jpg',
        imageMbWebp: {
            DPR1: './main/mb-webp/main-webp/listing lamp-lucy-mb-1x.webp',
            DPR2: './main/mb-webp/main-webp/listing lamp-lucy-mb-2x.webp',
            DPR3: './main/mb-webp/main-webp/listing lamp-lucy-mb-3x.webp'
        },
        imageMbJpeg: {
            DPR1: './main/mb/main/listing-lamp-lucy-mb-1x.jpg',
            DPR2: './main/mb/main/listing-lamp-lucy-mb-1x.jpg',
            DPR3: './main/mb/main/listing-lamp-lucy-mb-3x.jpg'
        },
        imageDescWebp: {
            DPR1: './main/desc-webp/mian-webp/listing-lamp-lucy-desc-1x.webp',
            DPR2: './main/desc-webp/mian-webp/listing-lamp-lucy-desc-2x.webp',
            DPR3: './main/desc-webp/mian-webp/listing-lamp-lucy-desc-3x.webp'
        },
        imageDescJpeg: {
            DPR1: './main/desc/main/listing-lamp-lucy-desc-1x.jpg',
            DPR2: './main/desc/main/listing-lamp-lucy-desc-2x.jpg',
            DPR3: './main/desc/main/listing-lamp-lucy-desc-3x.jpg'
        }
    }
];

const JsonList = JSON.stringify(products);
localStorage.setItem("products", JsonList);

function GetParam(param) {
    const LinkParam = new URLSearchParams(window.location.search);
    return LinkParam.get(param);
}

const Id = GetParam("id");
const Product = products.find(p => p.id === Id);

console.log(new URLSearchParams(window.location.search));

if (Product) {
    const picture = document.getElementById("picture");
    const sourceWebp = document.getElementById("source-webp");
    const sourceJpeg = document.getElementById("source-jpeg");
    const img = picture.getElementsByTagName("img")[0];
                
    if (sourceWebp && sourceJpeg && img) {
        const width = window.innerWidth;
        const dpr = window.devicePixelRatio;

        if (width >= 1440 && dpr >= 3) {
            img.src = width >= 1440 ? Product.imageDescJpeg.DPR3 : Product.imageMbJpeg.DPR3;
            sourceWebp.srcset = `${Product.imageDescWebp.DPR3} 3x`;
            sourceJpeg.srcset = `${Product.imageDescJpeg.DPR3} 3x`;
        } else if (width >= 1440 && dpr >= 2) {
            img.src = width >= 1440 ? Product.imageDescJpeg.DPR3 : Product.imageMbJpeg.DPR3;
            sourceWebp.srcset = `${Product.imageDescWebp.DPR2} 2x`;
            sourceJpeg.srcset = `${Product.imageDescJpeg.DPR2} 2x`;
        } else if (width >= 1440 && dpr >= 1) {
            img.src = width >= 1440 ? Product.imageDescJpeg.DPR3 : Product.imageMbJpeg.DPR3;
            sourceWebp.srcset = `${Product.imageDescWebp.DPR1} 1x`;
            sourceJpeg.srcset = `${Product.imageDescJpeg.DPR1} 1x`;
        } else if (dpr >= 3) {
            img.src = width <= 1440 ? Product.imageDescJpeg.DPR3 : Product.imageMbJpeg.DPR3;
        } else if (dpr >= 2) {
            img.src = width <= 1440 ? Product.imageDescJpeg.DPR2 : Product.imageMbJpeg.DPR2;
        } else {
            img.src = width <= 1440 ? Product.imageDescJpeg.DPR1 : Product.imageMbJpeg.DPR1;
        }
    }
        
    document.getElementById("product-name").textContent = Product.name;
    document.getElementById("product-price").textContent = "£" + Product.price;
    document.getElementsByClassName("product-img-js").id = `${Product.id}`;

} 

const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", AddToCart);

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function AddToCart() {
    const img = document.getElementsByClassName("product-img-js");
    const productId = img.id;

    const product = products.find(p => p.id === productId);

    if (product) {
        if (!cart.some(item => item.id === productId)) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
}