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
        "contact": "contact.html"
    };

    // Check if the input matches a defined page
    const targetPage = pageMapping[userInput.toLowerCase()]; // Convert input to lowercase for case-insensitive match

    if (targetPage) {
        // Navigate to the target page
        window.location.href = targetPage;
    } else {
        // Show an alert or handle invalid input
        alert("Page not found. Please enter a valid search term.");
    }
});