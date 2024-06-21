document.addEventListener("DOMContentLoaded", () => {
  const course = document.querySelectorAll("#course");
  const studentName = document.querySelector("#student-name");
  const completedDate = document.querySelectorAll("#completed-date");
  const organizerName = document.querySelector("#organizer-name");
  const organizerPosition = document.querySelector("#organizer-position");

  course.forEach((course) => {
    course.textContent = localStorage.getItem("course");
  });
  studentName.textContent = localStorage.getItem("studentName");
  completedDate.forEach((date) => {
    date.textContent = localStorage.getItem("completedDate");
  });
  organizerName.textContent = localStorage.getItem("organizerName");
  organizerPosition.textContent = localStorage.getItem("organizerPosition");
});
