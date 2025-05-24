// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before sending.");
        return;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for reaching out, Moses! I'll get back to you soon.");
});

// Email Validation Helper Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
