document.addEventListener("click", (e) => {
  const body = document.body;
  const div = document.createElement("div");
  div.classList.add("round");
  div.style.left = `${e.clientX + window.scrollX - 20}px`;
  div.style.top = `${e.clientY + window.scrollY - 20}px`;
  body.appendChild(div);
  setTimeout(() => {
    div.style.transform = `scale(1.8)`;
  }, 40);
  setTimeout(() => {
    body.removeChild(div);
  }, 2000);
});
