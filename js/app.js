const a = document.querySelector("a");
const navbar = document.getElementById("nav");
const toggleDiv = document.getElementById("toggle");
const button = toggleDiv.querySelector("button");
let videoItem = document.querySelectorAll(
  "section div.list-video div.video-item"
);
let kontak = document.querySelectorAll("section h1 p");
kontak.style.color = "#ffffff";
const body = document.body;
const p = document.querySelector("p");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
a.style.color = "#F5F5F5";
videoItem.style.backgroundColor = "#000000";
const list = document.getElementById("list");
const header = list.querySelector("h1");
toggleDiv.addEventListener("click", () => {
  button.classList.toggle("tombol");
  if (button.classList.contains("tombol")) {
    body.style.backgroundColor = "#d3d3d3ff";
    h1.style.color = "#2b2b2b";
    h2.style.color = "#2b2b2b";
    a.style.color = "#2b2b2b";
    p.style.color = "#2b2b2b";
    navbar.style.backgroundColor = "#939393ff";
    header.style.color = "#2b2b2b";
    toggleDiv.style.backgroundColor = "#d3d3d3ff";
  } else {
    body.style.backgroundColor = "#2b2b2b";
    h1.style.color = "#F5F5F5";
    h2.style.color = "#F5F5F5";
    a.style.color = "#F5F5F5";
    toggleDiv.style.backgroundColor = "#474747ff";
    navbar.style.backgroundColor = "#171010";
    p.style.color = "#F5F5F5";
    header.style.color = "#F5F5F5";
  }
});
