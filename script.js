// ===== Слайдер на першому екрані =====
if (document.querySelector(".hero-swiper")) {
    const swiper = new Swiper(".hero-swiper", {
        loop: true,          // Безкінечна прокрутка
        slidesPerView: 1,    // Видно один слайд
        spaceBetween: 30,    // Відступ між слайдами

        // Вмикаємо стрілки
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Вмикаємо крапочки
        pagination: {
            el: ".hero-swiper .swiper-pagination",
            clickable: true,
        },

        // Автопрокрутка
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
}

// ===== Слайдер відгуків (адаптивний) =====
if (document.querySelector(".reviews-swiper")) {
    const reviewsSwiper = new Swiper(".reviews-swiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,       // За замовчуванням (мобільний)
        pagination: {
            el: ".reviews-swiper .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,   // Планшет
            },
            1024: {
                slidesPerView: 3,   // Десктоп
            },
        },
    });
}

// ===== Мобільне меню «Гамбургер» =====
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        // toggle додає клас, якщо його немає, і забирає, якщо є
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        // Забороняємо прокрутку сайту під відкритим меню
        if (mobileMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });
}

// ===== Таби на сторінці товару =====
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // 1. Прибираємо клас active у всіх кнопок і блоків
        tabBtns.forEach(item => item.classList.remove("active"));
        tabContents.forEach(item => item.classList.remove("active"));

        // 2. Додаємо клас active поточній кнопці
        btn.classList.add("active");

        // 3. Знаходимо блок, який відповідає кнопці, і показуємо його
        const tabId = btn.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});

// ===== Модальне вікно «Замовити дзвінок» =====
const modal = document.getElementById("my-modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.querySelector(".close-modal");

if (openBtn && modal) {
    // Відкрити
    openBtn.addEventListener("click", () => {
        modal.classList.add("open");
    });

    // Закрити (хрестик)
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    // Закрити (клік поза вікном)
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
        }
    });
}
