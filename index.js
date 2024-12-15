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
        "jobs": "job.html",
        "job": "job.html",
        "jobs opportunity": "job.html",
        "jobs opportunities": "job.html",
        "job opportunity": "job.html",
        "job opportunities": "job.html",
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
