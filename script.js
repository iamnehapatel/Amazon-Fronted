document.addEventListener("DOMContentLoaded", function () {
    // Back to top click behavior
    const backToTop = document.getElementById("backToTop");
    
    if (backToTop) {
        backToTop.style.cursor = "pointer";
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});