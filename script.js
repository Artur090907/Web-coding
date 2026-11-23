// Swiper підключається лише на сторінках, де є відповідний слайдер.
if (window.Swiper && document.querySelector(".hero-swiper")) {
    new Swiper(".hero-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: { nextEl: ".hero-swiper .swiper-button-next", prevEl: ".hero-swiper .swiper-button-prev" },
        pagination: { el: ".hero-swiper .swiper-pagination", clickable: true },
        autoplay: { delay: 4000, disableOnInteraction: false }
    });
}
if (window.Swiper && document.querySelector(".reviews-swiper")) {
    new Swiper(".reviews-swiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: { el: ".reviews-swiper .swiper-pagination", clickable: true },
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
}

// Мобільне меню.
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
if (hamburger && mobileMenu) {
    const closeMenu = () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    };
    hamburger.addEventListener("click", () => {
        const opened = mobileMenu.classList.toggle("active");
        hamburger.classList.toggle("active", opened);
        hamburger.setAttribute("aria-expanded", String(opened));
        document.body.style.overflow = opened ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
}

// Перемикання табів.
document.querySelectorAll(".tabs-container").forEach(container => {
    const buttons = container.querySelectorAll(".tab-btn");
    const panels = container.querySelectorAll(".tab-content");
    buttons.forEach(button => button.addEventListener("click", () => {
        const panel = container.querySelector(`#${CSS.escape(button.dataset.tab)}`);
        if (!panel) return;
        buttons.forEach(item => {
            const active = item === button;
            item.classList.toggle("active", active);
            item.setAttribute("aria-selected", String(active));
        });
        panels.forEach(item => item.classList.toggle("active", item === panel));
    }));
});

// Модальне вікно.
const modal = document.getElementById("my-modal");
const modalOpeners = document.querySelectorAll("#open-modal-btn");
if (modal) {
    const closeButton = modal.querySelector(".close-modal");
    const openModal = () => {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeButton?.focus();
    };
    const closeModal = () => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };
    modalOpeners.forEach(button => button.addEventListener("click", openModal));
    closeButton?.addEventListener("click", closeModal);
    modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeModal(); });
    modal.querySelector("form")?.addEventListener("submit", event => {
        event.preventDefault();
        alert("Дякуємо! Вашу заявку прийнято.");
        event.currentTarget.reset();
        closeModal();
    });
}