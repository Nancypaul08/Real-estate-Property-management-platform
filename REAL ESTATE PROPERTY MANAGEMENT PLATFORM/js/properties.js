const listingPage = document.querySelector("#property-results");

if (listingPage) {
  const cards = [...listingPage.querySelectorAll(".property-card")];
  const locationInput = document.querySelector("#search-location");
  const typeInput = document.querySelector("#search-type");
  const minimumInput = document.querySelector("#min-price");
  const maximumInput = document.querySelector("#max-price");
  const sidebarMinimum = document.querySelector("#filter-min");
  const sidebarMaximum = document.querySelector("#filter-max");
  const resultCount = document.querySelector("#results-count");
  const emptyMessage = document.querySelector("#no-results");
  const filterInputs = [...document.querySelectorAll("[data-filter]")];

  function selectedValues(group) {
    return filterInputs
      .filter((input) => input.dataset.filter === group && input.checked)
      .map((input) => input.value.toLocaleLowerCase());
  }

  function applySearch() {
    const location = locationInput.value.trim().toLocaleLowerCase();
    const type = typeInput.value;
    const minimum = Math.max(Number(minimumInput.value) || 0, Number(sidebarMinimum.value) || 0);
    const maximum = Math.min(Number(maximumInput.value) || Infinity, Number(sidebarMaximum.value) || Infinity);
    const types = selectedValues("type");
    const locations = selectedValues("location");
    const beds = selectedValues("beds").map(Number);
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches =
        card.dataset.location.toLocaleLowerCase().includes(location) &&
        (!type || card.dataset.type === type) &&
        (!types.length || types.includes(card.dataset.type.toLocaleLowerCase())) &&
        (!locations.length || locations.some((city) => card.dataset.location.toLocaleLowerCase().includes(city))) &&
        (!beds.length || beds.some((bedCount) => Number(card.dataset.beds) >= bedCount)) &&
        Number(card.dataset.price) >= minimum &&
        Number(card.dataset.price) <= maximum;

      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "Property" : "Properties"} Found`;
    emptyMessage.hidden = visibleCount !== 0;
  }

  document.querySelector("#search-properties").addEventListener("click", applySearch);
  document.querySelector("#apply-filters").addEventListener("click", applySearch);
  document.querySelector("#clear-filters").addEventListener("click", () => {
    locationInput.value = "";
    typeInput.value = "";
    minimumInput.value = "0";
    maximumInput.value = "";
    sidebarMinimum.value = "";
    sidebarMaximum.value = "";
    filterInputs.forEach((input) => { input.checked = false; });
    applySearch();
  });
  locationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applySearch();
  });
}
