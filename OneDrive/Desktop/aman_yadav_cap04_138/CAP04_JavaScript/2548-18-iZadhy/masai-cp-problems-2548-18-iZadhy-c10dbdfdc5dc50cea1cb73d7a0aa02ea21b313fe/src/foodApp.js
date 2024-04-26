const getCategoriesData = async () => {
  // code here
 try {
  let catagory=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  let result=await catagory.json();
  return result;
 } catch (error) {
   return "something went wrong";
 }
};

const getIngredientData = async () => {
  // code here
  try {
    let catagory=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
   let result=await catagory.json();
  return result;
  } catch (error) {
    return "something went wrong";
  }

};

window.onload = function () {
  //  get the buttons here and add click event
  let catagories=document.getElementById('get-category-data');
  let ingredient=document.getElementById('get-ingredient-data');
  catagories.addEventListener('click',getCategoriesData);
  ingredient.addEventListener('click',getIngredientData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
