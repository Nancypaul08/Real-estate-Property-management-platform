const listingPage = document.querySelector("#property-results");

if (listingPage) {
  const cards = [...listingPage.querySelectorAll(".property-card")];
  const locationInput = document.querySelector("#search-location");
  const typeInput = document.querySelector("#search-type");
  const minimumInput = document.querySelector("#min-price");
  const maximumInput = document.querySelector("#max-price");
  const resultCount = document.querySelector("#results-count");
  const emptyMessage = document.querySelector("#no-results");

  function applySearch() {
    const location = locationInput.value.trim().toLocaleLowerCase();
    const type = typeInput.value;
    const minimum = Number(minimumInput.value) || 0;
    const maximum = Number(maximumInput.value) || Infinity;
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches =
        card.dataset.location.toLocaleLowerCase().includes(location) &&
        (!type || card.dataset.type === type) &&
        Number(card.dataset.price) >= minimum &&
        Number(card.dataset.price) <= maximum;

      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "Property" : "Properties"} Found`;
    emptyMessage.hidden = visibleCount !== 0;
  }

  document.querySelector("#search-properties").addEventListener("click", applySearch);
  locationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applySearch();
  });
}
