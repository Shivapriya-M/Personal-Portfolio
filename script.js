// Welcome message
console.log("Welcome to Shivapriya's Portfolio!");

// Navigation active effect
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "#00eeff";
    });
});

// Contact button message
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    console.log("Thank you for visiting my portfolio!");
});
