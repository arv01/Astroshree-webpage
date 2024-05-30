// Get the language select element
const languageSelect = document.getElementById("language-select");

// Add event listener to detect language change
languageSelect.addEventListener("change", function() {
    // Get the selected language value
    const selectedLanguage = languageSelect.value;

    // Perform actions based on the selected language
    if (selectedLanguage === "english") {
        // Set language to English
        // You can implement logic to change the language of your webpage to English
    } else if (selectedLanguage === "hindi") {
        // Set language to Hindi
        // You can implement logic to change the language of your webpage to Hindi
    } else {
        // Handle other language options if needed
    }
});
