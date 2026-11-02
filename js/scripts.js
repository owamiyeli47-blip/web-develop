// Saint Primitive Clothing - JavaScript
// File: js/scripts.js

document.addEventListener("DOMContentLoaded", function() {

    console.log("Saint Primitive Clothing - Loaded");

    // 1. HIGHLIGHT ACTIVE NAV LINK
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // 2. ENQUIRY FORM VALIDATION
    const enquiryForm = document.querySelector(".enquiry-form");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let product = document.getElementById("product").value;
            let message = document.getElementById("message").value.trim();

            if (name.length < 3) {
                alert("Please enter your full name.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (product === "") {
                alert("Please select a product.");
                return;
            }

            if (message.length < 10) {
                alert("Please enter a longer enquiry message (at least 10 characters).");
                return;
            }

            // Success
            alert("Thank you " + name + "! Your enquiry about " + product + " has been received. We will contact you at " + email);
            
            // Save for marking proof
            localStorage.setItem("lastEnquiry", JSON.stringify({name, email, product, message, date: new Date().toString()}));
            
            enquiryForm.reset();
        });
    }

    // 3. PRODUCT SEARCH (for Product.html)
const searchBox = document.getElementById("product-search");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        let filter = searchBox.value.toLowerCase();

        // Select all product cards/items
        let products = document.querySelectorAll(".product-item");

        products.forEach(product => {
            let text = product.textContent.toLowerCase();

            if (text.includes(filter)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });
    });
}

    // 4. SIMPLE IMAGE SLIDER (for Home.html if you have it)
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        function showSlides() {
            slides.forEach(s => s.style.display = "none");
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 3000);
        }
        showSlides();
    }
});