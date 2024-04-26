let container=document.getElementById("main-container")
let data=[]
function fetchData(){
 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(function(res){
     return res.json()
 })
 .then(function(res){
     data=res
     displayData(data)
 })
 .catch(err=>console.log(err))
}

function displayData(data){
 data.forEach(ele=>{
     let div=document.createElement("div")

     let ptag=document.createElement("p")
     ptag.innerText=ele.title

     let iscompleted=document.createElement("input")
     iscompleted.type="checkbox"
     iscompleted.checked=ele.completed

     div.append(ptag,iscompleted)
     container.appendChild(div)
 })
}
