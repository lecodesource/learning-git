// script.js
document.addEventListener("DOMContentLoaded", function () {
    const numSnowflakes = 1000; // ajustez le nombre de flocons de neige selon vos besoins
    const snowflakesContainer = document.querySelector(".snowflakes");

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`; // position aléatoire en pourcentage de la largeur de la fenêtre
        snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`; // durée de l'animation entre 5s et 10s

        snowflakesContainer.appendChild(snowflake);
    }
});
