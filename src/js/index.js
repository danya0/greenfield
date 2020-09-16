import slider from "./modules/slider";
import parallax from "./modules/parallax";
import nav from "./modules/nav";

document.addEventListener("DOMContentLoaded", () => {
    // Вызов главной функции переключения окон
    slider();

    // Вызов parallax функции написанной ранее, с селектором
    parallax(".parallax-container");

    // Вызов nav функции для работы nav menu
    nav();
});
