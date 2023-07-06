
let header=document.getElementById("header-title");
let html="<h1>HEllo word</h1>";
header.insertAdjacentHTML("beforebegin",html);
let list=document.getElementById("items");
let items=document.createElement("li");
items.className="list-group-item";
items.textContent="HEllo word";
let pos=list.firstElementChild;
list.insertBefore(items,pos);
