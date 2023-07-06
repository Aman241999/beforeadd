
let header=document.getElementById("header-title");
let html="<h1>HEllo word</h1>";
header.insertAdjacentHTML("beforebegin",html);
let item=document.getElementsByClassName("list-group-item");
let html1="<h1>HEllo word</h1>";
item[0].insertAdjacentHTML("beforebegin",html1);