const sidebarButton = document.querySelector(".navbar-bar-button");
const sidebarCloseButton = document.querySelector(".sidebar-close-button");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");
sidebarButton.addEventListener("click", function () {
    sidebar.style.display = "block";
})
sidebarCloseButton.addEventListener("click", function () {
    sidebar.style.display = "none";
})

const bigCard = document.querySelectorAll(".big-card");

bigCard.forEach((card, index) => {
    if (index <= 3) {
        card.addEventListener("mouseover", function () {
            document.querySelectorAll(".big-card .card-img img")[index].src = `./assets/img/card${index + 1}.webp`;
            document.querySelectorAll(".card-description")[index].classList.add("disable");
            document.querySelectorAll(".card-description")[index].parentElement.classList.add("p-2");
            document.querySelectorAll(".card-description-icons")[index].classList.remove("disable");
        });

        card.addEventListener("mouseout", function () {
            document.querySelectorAll(".big-card .card-img img")[index].src = `./assets/img/card${index + 1}-2.webp`;
            document.querySelectorAll(".card-description")[index].classList.remove("disable");
            document.querySelectorAll(".card-description-icons")[index].classList.add("disable");
            document.querySelectorAll(".card-description")[index].parentElement.classList.remove("p-2");
        });
    } else {
        card.addEventListener("mouseover", function () {
            document.querySelectorAll(".big-card .card-img .right-images")[index - 4].classList.remove("vis-hidden");
            document.querySelectorAll(".big-card .card-img .right-images")[index - 4].classList.add("vis-visible");
            document.querySelectorAll(".card-description")[index].classList.add("disable");
            document.querySelectorAll(".card-description")[index].parentElement.classList.add("p-2");
            document.querySelectorAll(".card-description-icons")[index].classList.remove("disable");
        });

        card.addEventListener("mouseout", function () {
            document.querySelectorAll(".big-card .card-img .right-images")[index - 4].classList.remove("vis-visible");
            document.querySelectorAll(".big-card .card-img .right-images")[index - 4].classList.add("vis-hidden");
            document.querySelectorAll(".card-description")[index].classList.remove("disable");
            document.querySelectorAll(".card-description-icons")[index].classList.add("disable");
            document.querySelectorAll(".card-description")[index].parentElement.classList.remove("p-2");
        });
    }

});
const cardRightImage = document.querySelectorAll(".big-card .card-img .right-images img");

cardRightImage.forEach((item, index) => {
    item.addEventListener("mouseover", function () {
        var findDiv = this.parentElement.parentElement.parentElement;
        var oldImage = findDiv.querySelector(".main-image").src;
        findDiv.querySelector(".main-image").src = `${item.src}`;
    })
});



