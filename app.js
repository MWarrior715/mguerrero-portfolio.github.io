(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

//change the language of the page with files .json

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const response = await fetch(`./languages/${language}.json`);
    const texts = await response.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});