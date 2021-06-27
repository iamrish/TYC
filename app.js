const title = document.getElementById("title");
const underscore = document.createElement("span");
const about = document.getElementById("about-desc");

underscore.id = "moving-ele";
underscore.textContent = "_";
title.textContent = "THE | \n\tYOGA | \n\t\t   CLINIC _/\\";

title.appendChild(underscore);
let cursor = true;
let speed = 300;
setInterval(() => {
  if (cursor) {
    underscore.style.opacity = 0;
    cursor = false;
  } else {
    underscore.style.opacity = 1;
    cursor = true;
  }
}, speed);

