document.getElementById("searchButton").addEventListener("click", function () {
    handleSearch();
});

document.getElementById("searchBar").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});

function handleSearch() {
    const userInput = document.getElementById("searchBar").value.trim();

    // mapping user input and url
    const pageMapping = {
        "home": "index.html",
        "about": "about.html",
        "about apple": "about.html",
        "products": "products.html",
        "where to buy": "wheretobuy.html",
        "buy": "wheretobuy.html",
        "support": "support.html",
        "jobs": "jobs.html",
        "job": "jobs.html",
        "jobs opportunity": "jobs.html",
        "jobs opportunities": "jobs.html",
        "job opportunity": "jobs.html",
        "job opportunities": "jobs.html",
        "contact": "support.html",
        "education": "education.html",
        "sign in": "signin.html",
        "sign up": "signup.html",
        "privacy notice": "privacy.html",
        "privacy policy": "privacy.html",
        "privacy": "privacy.html",
        "login": "signin.html",
        "register": "signup.html"
    };

    const targetPage = pageMapping[userInput.toLowerCase()]; // Convert input to lowercase for case-insensitive match

    if (targetPage) {
        // Navigate to the target page
        window.location.href = targetPage;
    } else {
        // invalid
        window.location.href = "404.html";
    }
}
