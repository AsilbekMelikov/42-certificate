document.addEventListener("DOMContentLoaded", () => {
  const generateCertificate = document.querySelector("#form__btn");
  const courseInput = document.querySelector("#course-input");
  const nameInput = document.querySelector("#student-name-input");
  const dateInput = document.querySelector("#date-input");
  const organizerInput = document.querySelector("#course-organizer-input");
  const positionInput = document.querySelector("#organizer-position-input");

  generateCertificate.addEventListener("click", () => {
    const convertNumberToMonth = (numberMonth) => {
      const months = [
        "yanvar",
        "fevral",
        "mart",
        "aprel",
        "may",
        "iyun",
        "iyul",
        "avgust",
        "sentyabr",
        "oktyabr",
        "noyabr",
        "dekabr",
      ];
      return months[numberMonth];
    };

    const customizeDate = new Date(dateInput.value);
    const dateFullYear = customizeDate.getFullYear();
    const dateMonth = convertNumberToMonth(customizeDate.getMonth());
    const dateDay = customizeDate.getDate();
    const date = `${dateFullYear}-yil, ${dateDay}-${dateMonth}`;

    localStorage.setItem("course", courseInput.value);
    localStorage.setItem("studentName", nameInput.value);
    localStorage.setItem("completedDate", date);
    localStorage.setItem("organizerName", organizerInput.value);
    localStorage.setItem("organizerPosition", positionInput.value);

    if (
      courseInput.value &&
      nameInput.value &&
      dateInput.value &&
      organizerInput.value &&
      positionInput.value
    ) {
      document.location.href = "certificate.html";
    }
  });
});
