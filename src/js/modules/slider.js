const slider = () => {
    const carousel = document.querySelector(".carousel");
    const carouselClasses = ["carousel", "slide1"];
    let aviableNow = true;
    let slideValue = 1;

    // * В зависимости от браузера ставит обработчик на колесико мыши
    if (document.addEventListener) {
        if ("onwheel" in document) {
            document.addEventListener("wheel", onWheel);
        } else if ("onmousewheel" in document) {
            document.addEventListener("mousewheel", onWheel);
        } else {
            document.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else {
        document.attachEvent("onmousewheel", onWheel);
    }

    // * Функция которая меняет логотив в зависимости от слайда
    function changeLogo(slideValue) {
        const headerLogo = document.querySelector('.header__logo');
        if (slideValue === 1) {
            headerLogo.classList.add('white');
        } else if (slideValue === 2) {
            headerLogo.classList.remove('white');
        } else {
            return;
        }
    }

    // * Функция для смены слайда
    function changeSlide(delta) {

        const prevSlideValue = slideValue;
        // ? Получаем предыдущий слайд (секцию), чтобы удалить для нее класс с анимацией и добавить класс с уходящей анимацией
        const prevSlideSelector = `.section${slideValue}`;
        const prevSlide = document.querySelector(prevSlideSelector);

        // ? Получаем слайд на который перешел пользователь, чтобы добавить класс с анимацией
        slideValue = slideValue + delta;
        const nextSlideSelector = `.section${slideValue}`
        const nextSlide = document.querySelector(nextSlideSelector)

        if (slideValue > prevSlideValue) {
            nextSlide.classList.add("coming");

            setTimeout(()=> {
                nextSlide.classList.remove("coming");
            }, 3000);

            prevSlide.classList.add("outgoing");
        } else {
            nextSlide.classList.remove("outgoing");
        }

        // ? Вызываем функцию которая меняет логотип
        changeLogo(slideValue)

        carouselClasses.splice(1, 2);
        console.log(carouselClasses);
        // ? Добавляем класс с transition для плавной анимации
        carouselClasses.push('switches');
        carouselClasses.push(`slide${slideValue}`);

        carousel.classList.value = carouselClasses.join(" ");
        
        // ? Через три секунды удаляем класс switches, чтобы избежать багов анимации и заново пушим классы
        setTimeout(() => {
            carouselClasses.splice(1, 1);
            carousel.classList.value = carouselClasses.join(" ");
        }, 3000);
    }

    // * Функция которая устанавливает задержку между вызовами функции "changeSlide", чтобы не вызывать лишних ошибок, или искажений графики
    function setDelay() {
        if (aviableNow) {
            aviableNow = false;

            setTimeout(() => {
                aviableNow = true;
            }, 3000);
        }
    }

    // * Функция для работы скролла сайта при прокрутке колесика мыши
    function onWheel(e) {
        const delta = (e.deltaY || e.detail || e.wheelDelta) / 100;
        if (
            (aviableNow && delta === 1 && slideValue !== 5) ||
            (aviableNow && delta === -1 && slideValue !== 1)
        ) {
            setDelay();
            changeSlide(delta);
        }
    }

    // * Использую плагин "HAMMER.JS" для отслеживания свайпов с мобильных устройств
    new Hammer(carousel).on('swipe panup pandown', function(ev) {
        if(ev.type === 'swipe') {
            let delta = null;
            ev.deltaX < 0 ? delta = 1 : delta = -1;

            if (
                (aviableNow && delta === 1 && slideValue !== 5) ||
                (aviableNow && delta === -1 && slideValue !== 1)
            ) {
                setDelay();
                changeSlide(delta);
            }
        } else if (ev.type === 'panup' && aviableNow) {
            setDelay();
            changeSlide(1);
        } else if (ev.type === 'pandown' && aviableNow) {
            setDelay();
            changeSlide(-1);
        }
    });
};

export default slider;
