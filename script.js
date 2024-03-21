let input = document.querySelector("#input");
let btn = document.querySelector("#add-task-btn");
let ul = document.querySelector(".ul");
let appContainer = document.querySelector("#app-container");

const showList = () => {
  if (input.value == "") {
    alert("please enter some task");
    li.style.display = "none";
  }
  let li = document.createElement("li");
  li.innerHTML = input.value;
  ul.appendChild(li);
  let span = document.createElement("span");
  li.appendChild(span);
  li.addEventListener("click", () => {
    li.classList.toggle("active");
  });
  span.addEventListener("click", () => {
    li.style.display = "none";
  });
};
btn.addEventListener("click", () => {
  showList();
});
