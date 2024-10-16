const sidebarButton = document.querySelector(".navbar-bar-button");
const sidebarCloseButton = document.querySelector(".sidebar-close-button");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");
sidebarButton.addEventListener("click",function(){
    sidebar.style.display ="block";
})
sidebarCloseButton.addEventListener("click",function(){
    sidebar.style.display="none";
})
