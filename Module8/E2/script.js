"use strict";

const lazyImages = document.querySelectorAll("img.lazy-image");
console.log(lazyImages);

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;

            img.src = img.dataset.src;
            img.classList.remove("lazy-image");

            observer.unobserve(img);
        }
    });
}, {
    rootMargin: "100px 0px",
    threshold: 0.1
});

lazyImages.forEach(img => imageObserver.observe(img));