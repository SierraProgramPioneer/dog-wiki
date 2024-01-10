// Get and set Name

function getName() {
    // Get Value from each form input
    const firstName = document.getElementById("firstName").value;
    const vacation = document.getElementById("vacation").value;
    // Set story variables from form
    document.querySelector("span#firstName").innerText = firstName;
    document.querySelector("span#vacation").innerText = vacation;

}


window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        getName();
        document.querySelector("div#letter").removeAttribute("class");
    };
};