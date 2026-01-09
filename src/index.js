const BASE_URL = "http://localhost:3000/ramens";

/* =========================
   DISPLAY ALL RAMENS
========================= */
function displayRamens() {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .then((ramens) => {
      const ramenMenu = document.getElementById("ramen-menu");
      ramenMenu.innerHTML = "";

      ramens.forEach((ramen) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;

        img.addEventListener("click", (event) => {
          handleClick(ramen, event);
        });

        ramenMenu.appendChild(img);
      });
    });
}

/* =========================
   HANDLE CLICK
========================= */
function handleClick(ramen) {
  const detailImg = document.querySelector("#ramen-detail > .detail-image");
  const detailName = document.querySelector("#ramen-detail > .name");
  const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");

  const detailRating = document.getElementById("rating-display");
  const detailComment = document.getElementById("comment-display");

  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;

  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = ramen.rating.toString();
  detailComment.textContent = ramen.comment;
}


/* =========================
   HANDLE SUBMIT
========================= */
function addSubmitListener() {
  const form = document.getElementById("new-ramen");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target.comment.value,
    };

    const ramenMenu = document.getElementById("ramen-menu");

    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;

    img.addEventListener("click", (event) => {
      handleClick(newRamen, event);
    });

    ramenMenu.appendChild(img);
    form.reset();
  });
}

/* =========================
   MAIN
========================= */
function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);

/* =========================
   EXPORTS FOR TESTING
========================= */
export { displayRamens, handleClick, addSubmitListener };
