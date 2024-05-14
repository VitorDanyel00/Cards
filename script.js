const cardContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) =>{
    const target = e.target.closest(".card");
    if(!target) return;

    cardContainer.querySelectorAll(".card").forEach((card) =>{
        card.classList.remove("active");
    });
    target.classList.add("active");
});