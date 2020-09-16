const navMenu = () => {
    const showBtn = document.querySelector(".button-nav"),
        closeBtn = document.querySelector(".nav-close"),
        navMenu = document.querySelector(".nav"),
        carousel = document.querySelector(".carousel");

    function closeNavMenu() {
        navMenu.classList.remove("opened");
        navMenu.classList.add("closed");
    }

    showBtn.addEventListener("click", () => {
        navMenu.classList.remove("closed");
        navMenu.classList.add("opened");
    });

    closeBtn.addEventListener("click", () => {
        closeNavMenu();
    });

    carousel.addEventListener("click", () => {
        closeNavMenu();
    });

};

export default navMenu;
