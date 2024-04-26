function Listing(name, category, imageUrl, price) {
  this.name=name;
  this.category=category;
  this.imageUrl=imageUrl;
  this.price=price;
  this.sold=false;
}

function getFormData() {
 let name=document.getElementById('name').value;
 let category=document.getElementById('category').value;
 let image=document.getElementById('image').value;
 let price=document.getElementById('price').value;

return {name,category,image,price}
}

function addListing(input, category, image, price) {
  let product=new Listing(input,category,image,price);
  let existproduct=JSON.parse(localStorage.getItem('Products'))||[];
  existproduct.push(product);
  localStorage.setItem('Products',JSON.stringify(existproduct))
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  let form=document.getElementById('form')
  form.addEventListener('submit',function(event){
    event.preventDefault();
    let formData=getFormData()
    addListing(formData.name,formData.category,formData.image,formData.price);
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
