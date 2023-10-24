const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')
const menuCenter = document.querySelector(".menu-center")
const container = document.querySelector(".menu-btn-container")
//Mobile 
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);



const cafeMenu = [
    {
        id: 1,
        title: "Iced Coffee Latte",
        price: 8,
        img: "images/IcedLatte.jpg"
    },
    {
        id: 2,
        title: "Coffee ToGo",
        price: 8,
        img: "images/Cappucchino.jpg"
    },
    {
        id: 3,
        title: "Iced Matcha Latte",
        price: 8,
        img: "images/Matcha.jpg"
    },
    {
        id: 1,
        title: "Iced Coffee Latte",
        price: 8,
        img: "images/IcedLatte.jpg"
    },
    {
        id: 2,
        title: "Coffee ToGo",
        price: 8,
        img: "images/Cappucchino.jpg"
    },
    {
        id: 3,
        title: "Iced Matcha Latte",
        price: 8,
        img: "images/Matcha.jpg"
    }
];

window.addEventListener("DOMContentLoaded", function () {
    const menuCenter = document.querySelector(".menu-center"); // Get the menu-center element
    displayMenuItems(cafeMenu, menuCenter);
    displayMenuButtons();
});

function displayMenuItems(menuItems, container) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-container">
            <div class="menu-box>
                <div class="menu-image">
                    <img src="${item.img}" class="item-image" style="width:200px;height:200px;" />
                </div>
            
                <div class="item-name">
                    <h2>${item.title}</h2>
                    <p class="item-price">
                        Price: CHF ${item.price}
                    </p>
                </div>
            </div>
        </article>`;
    });

    displayMenu = displayMenu.join('');
    container.innerHTML = displayMenu;
}




