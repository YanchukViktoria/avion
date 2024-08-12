    
let user = JSON.parse(window.localStorage.getItem("user")); 

let userName = document.getElementById("name");
const userOrder = document.getElementById("order-number");

function GetParam(param) {
    const urlParam = new URLSearchParams(window.location.search);
    return urlParam.get(param);
}

const orderId = GetParam('orderId');

for (let i = 0; i < user.length; i++){
    if (user[i].order === orderId) {
        userName.textContent = user[i].firstName;
        userOrder.textContent = user[i].order;
    }
}