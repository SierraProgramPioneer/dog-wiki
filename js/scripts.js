// Get User's Input
function getBreed() {
    const breed = document.getElementById("breed").value;
    return breed;
}

//  Display Dog Breed Information Based on User's Request

// Add window load Event Listener
window.addEventListener("load", function () {
    // Add Event Listener for Form Submit
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // Prevent Default Refresh
        event.preventDefault();

        // Set all Content to Hidden
        let golden = document.getElementById("goldenRetriever");
        golden.setAttribute("class", "hidden");

        let corgi = document.getElementById("corgi");
        corgi.setAttribute("class", "hidden");

        let setter = document.getElementById("englishSetter");
        setter.setAttribute("class", "hidden");

        let incorrect = document.getElementById("incorrect");
        incorrect.setAttribute("class", "hidden");

        // Get input Breed
        const breed = getBreed();

        if (breed === "Golden Retriever") {
            document.querySelector("div#goldenRetriever").removeAttribute("class");
        }

        else if (breed === "Corgi") {
            document.querySelector("div#corgi").removeAttribute("class");
        }

        else if (breed === "English Setter") {
            document.querySelector("div#englishSetter").removeAttribute("class");
        }

        else {
            document.querySelector("div#incorrect").removeAttribute("class");
        }
    });
});

