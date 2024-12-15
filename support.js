document.getElementById("searchButton").addEventListener("click", function () {
    const userInput = document.getElementById("searchBar").value.trim();

    // Define a mapping of possible user inputs to corresponding URLs
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

document.addEventListener("DOMContentLoaded", function () {
    const btnSearch = document.getElementById("btnSearch");
    const searchInput = document.getElementById("support-search");
    const faqResults = document.getElementById("faq-results");

    // Predefined FAQ list (questions and answers)
    const faqs = [
        {
            question: "How can I reset my Apple ID password?",
            answer: "To reset your Apple ID password, go to https://iforgot.apple.com and follow the instructions."
        },
        {
            question: "How to contact Apple Support?",
            answer: "You can contact Apple Support via the Support app or at https://support.apple.com/contact."
        },
        {
            question: "What is AppleCare+?",
            answer: "AppleCare+ provides extended warranty coverage and technical support for your Apple products."
        },
        {
            question: "How can I update my iPhone to the latest iOS?",
            answer: "Go to Settings > General > Software Update to check for the latest iOS version and install it."
        },
        {
            question: "What to do if my device is not turning on?",
            answer: "First, try charging your device. If it still doesn’t turn on, perform a hard reset or contact Apple Support."
        }
    ];

    // Function to handle the search
    btnSearch.addEventListener("click", function () {
        const query = searchInput.value.trim().toLowerCase(); // Get the user's input
        faqResults.innerHTML = ""; // Clear previous results

        if (!query) {
            faqResults.innerHTML = "<p>Please enter a search term.</p>";
            return;
        }

        // Filter FAQs based on the user's query
        const matchingFaqs = faqs.filter(faq => 
            faq.question.toLowerCase().includes(query)
        );

        if (matchingFaqs.length > 0) {
            // Display matching FAQs
            matchingFaqs.forEach(faq => {
                const faqItem = document.createElement("div");
                faqItem.classList.add("faq-item");

                const question = document.createElement("div");
                question.classList.add("faq-question");
                question.textContent = faq.question;

                const answer = document.createElement("div");
                answer.classList.add("faq-answer");
                answer.textContent = faq.answer;

                faqItem.appendChild(question);
                faqItem.appendChild(answer);
                faqResults.appendChild(faqItem);
            });
        } else {
            // Display "no results found" message
            faqResults.innerHTML = "<p>No FAQs found matching your query. Try searching for something else.</p>";
        }
    });
});
