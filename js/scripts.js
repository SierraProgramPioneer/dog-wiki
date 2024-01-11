// Get User's Input
function getBreed() {
    const breed = document.getElementById("breed").value;
    console.log(breed);
}

//  Display Dog Breed Information Based on User's Request

// Add window load Event Listener
window.addEventListener("load", function () {
    // Add Event Listener for Form Submit
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // Prevent Default Refresh
        event.preventDefault();
        getBreed();
    })
});

