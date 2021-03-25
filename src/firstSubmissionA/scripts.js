const modalOverlay = document.querySelector(".modal-overlay");
const items = document.querySelectorAll(".item");

for (let item of items) {
    item.addEventListener("click", () => {
        const videoId = item.getAttribute("id")
        modalOverlay.classList.add("active");
        document
            .querySelector("#iframe-home").src =
            `https://www.youtube.com/embed/${videoId}`;
    });
}

document
    .querySelector(".close-modal")
    .addEventListener("click", () => {
        modalOverlay.classList.remove("active");
        document
            .querySelector("iframe").src = "";

    });
