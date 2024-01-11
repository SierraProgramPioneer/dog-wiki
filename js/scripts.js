// Get User's Input
function getBreed() {
    const breed = document.getElementById("breed").value;
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

        getBreed();
    })
});

