const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("theme");

    if (document.body.classList.contains("theme")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

