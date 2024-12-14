document.getElementById("searchButton").addEventListener("click", function () {
    const userInput = document.getElementById("searchBar").value.trim();

    // Define a mapping of possible user inputs to corresponding URLs
    const pageMapping = {
        "home": "index.html",
        "about": "about.html",
        "products": "products.html",
        "where to buy": "wheretobuy.html",
        "support": "support.html",
        "jobs": "jobs.html",
        "contact": "contact.html",
        "education": "education.html",
        "sign in": "signin.html",
        "sign up": "signup.html",
        "privacy notice": "privacy.html",
        "privacy policy": "privacy.html",
        "privacy": "privacy.html",
        "login": "signin.html"
    };

    // Check if the input matches a defined page
    const targetPage = pageMapping[userInput.toLowerCase()]; // Convert input to lowercase for case-insensitive match

    if (targetPage) {
        // Navigate to the target page
        window.location.href = targetPage;
    } else {
        // Show an alert or handle invalid input
        window.location.href = "404.html";
    }
});
