const form = document.querySelector("form");
const nameField = document.querySelector(".nameField");

const handleClick = () => {
  if (nameField.value === "") {
    alert("Name must be filled out.");
    return false;
  }
};

form.addEventListener("submit", handleClick);
