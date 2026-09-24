const inquiryForm = document.querySelector("#inquiry-form");

if (inquiryForm) {
  const visitDate = document.querySelector("#inq-date");
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  visitDate.min = localToday;

  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    document.querySelector("#inquiry-status").textContent =
      "Your details are valid. This demo does not send inquiries to a server yet.";
  });
}
