const galleryImage = document.querySelector("#gallery-image");

if (galleryImage) {
  const thumbnails = [...document.querySelectorAll(".gallery-thumb")];
  const counter = document.querySelector("#gallery-counter");

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      galleryImage.src = thumbnail.dataset.image;
      galleryImage.alt = thumbnail.querySelector("img").alt;
      counter.textContent = `${index + 1} / ${thumbnails.length}`;

      thumbnails.forEach((item) => {
        const active = item === thumbnail;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });
}
