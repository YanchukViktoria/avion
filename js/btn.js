const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", pressedBtn);


const mainTextContent = cartBtn.textContent;

function pressedBtn() {
    cartBtn.classList.add('active');
    cartBtn.textContent = "Added";
    setTimeout(() => {
        cartBtn.textContent = mainTextContent;
        cartBtn.classList.remove('active');
        cartBtn.classList.remove('active');
    }, 2000);
}