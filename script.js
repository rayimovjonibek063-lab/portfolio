"javascript"
// ============================================
// JONIBEK RAYIMOV - PORTFOLIO JAVASCRIPT
// ============================================
// ============================================
// ELEMENTLARNI TOPISH
// ============================================
// -------------------------
// MEN HAQIMDA
// -------------------------
const aboutButton = document.getElementById("aboutButton");
const aboutModal = document.getElementById("aboutModal");
const aboutClose = document.getElementById("aboutClose");
// -------------------------
// LOYIHALAR
// -------------------------
const projectsButton = document.getElementById("projectsButton");
const projectsModal = document.getElementById("projectsModal");
const projectsClose = document.getElementById("projectsClose");
// ============================================
// MEN HAQIMDA OYNASINI OCHISH
// ============================================
aboutButton.addEventListener("click", function(event) {
    // Linkning standart ishlashini to'xtatamiz
    event.preventDefault();
    // Agar loyihalar oynasi ochiq bo'lsa,
    // uni yopamiz
    projectsModal.style.display = "none";
    // Men haqimda oynasini ochamiz
    aboutModal.style.display = "flex";
});
// ============================================
// MEN HAQIMDA OYNASINI YOPISH
// ============================================
aboutClose.addEventListener("click", function() {
    aboutModal.style.display = "none";
});
// ============================================
// LOYIHALAR OYNASINI OCHISH
// ============================================
projectsButton.addEventListener("click", function(event) {
    // Linkning standart ishlashini to'xtatamiz
    event.preventDefault();
    // Agar Men haqimda oynasi ochiq bo'lsa,
    // uni yopamiz
    aboutModal.style.display = "none";
    // Loyihalar oynasini ochamiz
    projectsModal.style.display = "flex";
});
// ============================================
// LOYIHALAR OYNASINI YOPISH
// ============================================
projectsClose.addEventListener("click", function() {
    projectsModal.style.display = "none";
});
// ============================================
// MODAL TASHQARISINI BOSGANDA YOPISH
// ============================================
window.addEventListener("click", function(event) {
    // Men haqimda oynasining tashqarisi
    // bosilganini tekshiramiz
    if (event.target === aboutModal) {
        aboutModal.style.display = "none";
    }
    // Loyihalar oynasining tashqarisi
    // bosilganini tekshiramiz
    if (event.target === projectsModal) {
        projectsModal.style.display = "none";
    }
});
// ============================================
// ESC TUGMASI BILAN YOPISH
// ============================================
document.addEventListener("keydown", function(event) {
    // ESC tugmasi bosilganini tekshiramiz
    if (event.key === "Escape") {
        // Ikkala oynani ham yopamiz
        aboutModal.style.display = "none";
        projectsModal.style.display = "none";
    }
});
// ============================================
// SAHIFA YUKLANGANDA MODALLARNI YOPISH
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    aboutModal.style.display = "none";
    projectsModal.style.display = "none";
});
// ============================================
// TEKSHIRUV
// ============================================
console.log("=================================");
console.log("Jonibek Rayimov Portfolio");
console.log("JavaScript muvaffaqiyatli ishga tushdi!");
console.log("=================================");
