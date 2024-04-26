let data = [];
let fecthCountries = async () => {
  // make an API
    let response = await fetch('https://restcountries.com/v3.1/all');
    data = await response.json();
  return data;
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");

  let imgtag=document.createElement('img')
  imgtag.src=el.flags.png;

  let h3tag=document.createElement('h3');
  h3tag.textContent=el.name.common;

  let ptag1=document.createElement('p')
  ptag1.textContent=`Population: ${el.population}`;
  ptag1.style.marginLeft="20px";

  let ptag2=document.createElement('p')
  ptag2.textContent=`Region: ${el.region}`;
  ptag2.style.marginLeft="20px";

  let ptag3=document.createElement('p')
  ptag3.textContent=`Capital: ${el.capital}`;
  ptag3.style.marginLeft="20px";

  cardDiv.append(imgtag,h3tag,ptag1,ptag2,ptag3)
  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");
  container.innerHTML = ''; 
  // loop through the cards and append to main container
  data.forEach(country => {
    const card = countryCard(country);
    container.appendChild(card);
  });
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  if (order === 'asc') {
   return data.slice().sort((a, b) => a.population - b.population);
  }
   else if (order === 'desc') {
  return data.slice().sort((a, b) => b.population - a.population);
  }
  // it expectes two arguments type of sort (asc or desc) and data
  return data;
};
let filterByRegionLogic = (data, regionName) => {
  // handle filter logic here and return filtered data
  if (regionName === 'all') {
    return data;
  } else {
    return data.filter(country => country.region === regionName);
  }
  // it expectes two arguments data and region
  // return filteredData
};
let handleSortAndFilter = () => {
   let sortSelect = document.getElementById('sort_population');
   let filterSelect = document.getElementById('filter_region');

   let sortSelected=sortSelect.value;
   let filterSelected=filterSelect.value;

  let filteredData = filterByRegionLogic(data, filterSelected);
  let sortedAndFilteredData = sortLogic(sortSelected, filteredData);

  renderData(sortedAndFilteredData);
};
window.onload =async function () {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  data =await fecthCountries()
  renderData(data);
  // add change event listeners to sort and filter
  let sort_population1=document.getElementById('sort_population')
  let filter_region1=document.getElementById('filter_region')

  sort_population1.addEventListener('change', handleSortAndFilter);
  filter_region1.addEventListener('change', handleSortAndFilter);
};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
