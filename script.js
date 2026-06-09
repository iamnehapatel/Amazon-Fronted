// script.js
console.log("Amazon Clone Loaded");

// Agar tum mobile par menu show/hide karna chahte ho:
function toggleMenu() {
    let panel = document.querySelector(".panel");
    if(panel.style.display === "flex") {
        panel.style.display = "none";
    } else {
        panel.style.display = "flex";
        panel.style.flexDirection = "column"; // Mobile ke liye vertical
    }
}