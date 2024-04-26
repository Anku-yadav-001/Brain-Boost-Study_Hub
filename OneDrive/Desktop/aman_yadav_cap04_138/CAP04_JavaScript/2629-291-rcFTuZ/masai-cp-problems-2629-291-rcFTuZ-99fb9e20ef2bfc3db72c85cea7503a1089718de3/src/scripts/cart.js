function removeFromCart(itme){
    let cartItem=JSON.parse(localStorage.getItem("itmes"));
    let updatedcart=cartItem.filter((el)=>el.id!==itme.id);
    localStorage.setItem("itmes",JSON.stringify(updatedcart));
    renderCart();
}




function renderCart(){
    let cartItems=JSON.parse(localStorage.getItem('items'));
    let itemscont=document.getElementById('cart')
    data.map((item)=>{
        let card=document.createElement('div');
        card.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>    
        `;

        let button=document.createElement('button')
        button.innerText="Remove form cart";
        button.onclick=()=>{
            removeFromCart(item)
        }
        card.appendChild(button);
        itemscont.appendChild(card);
    });
}







window.onload-(async()=>{
    renderCart();
})