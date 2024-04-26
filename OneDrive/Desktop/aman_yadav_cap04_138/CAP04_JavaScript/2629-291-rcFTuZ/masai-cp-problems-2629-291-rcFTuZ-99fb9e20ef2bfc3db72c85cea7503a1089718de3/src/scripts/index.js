// The items should be stored in local storage with key :- “items”
async function fectchProducts(){
    let response=await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries')
    let data=response.json()
    return data;
}
function addToCart(item){
    let cartItems=localStorage.getItem('items');
    if(!cartItems){
        cartItems=[];
    }
    else{
        cartItems=JSON.parse(cartItems)
    }
    if(!cartItems.includes(item)){
        cartItems.push(item)
        localStorage.setItem('items',JSON.stringify(cartItems));
        updatecount();
    }
}

function updatecount(){
    let count=document.getElementById('item_count');
    count.innerText=JSON.parse(localStorage.getItem('items')).length;
    
}


window.onload=(async()=>{

localStorage.setItem('items',JSON.stringify([]))



    let {data}=await fectchProducts();
    let itemscont=document.getElementById('items')
    data.map((item)=>{
        let card=document.createElement('div');
        card.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>    
        `;

        let button=document.createElement('button')
        button.innerText="Add to cart";
        button.onclick=()=>{
            addToCart(item)
        }
        card.appendChild(button);
        itemscont.appendChild(card);
    })
})