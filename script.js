document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth Back To Top Navigation Feature
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 2. Carousel Horizontal Automatic Slide & Loop Manager
    const carousel = document.getElementById("productCarousel");
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Custom Mouse Drag Scrolling Mechanics for testing preview profiles
        carousel.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener("mouseleave", () => {
            isDown = false;
        });

        carousel.addEventListener("mouseup", () => {
            isDown = false;
        });

        carousel.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Speed multiplier modifier
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    // 3. Mini Notification Alert for empty search variables
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");
    
    if (searchIcon && searchInput) {
        searchIcon.addEventListener("click", () => {
            if (searchInput.value.trim() === "") {
                alert("Please type something to search on Amazon Clone!");
            } else {
                alert("Searching for: " + searchInput.value);
            }
        });
    }
});