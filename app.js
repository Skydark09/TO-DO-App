let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let del = document.querySelectorAll(".del");
let upd = document.querySelectorAll(".upd");

let editli = null;

btn.addEventListener("click", function () {
  if (editli === null) {
    let li = document.createElement("li");
    li.innerHTML = `<span>${inp.value}</span>`;

    let b = document.createElement("button");
    b.classList.add("del");
    b.innerText = "Delete";

    let up = document.createElement("button");
    up.classList.add("upd");
    up.innerText = "Update";

    ul.appendChild(li);
    li.appendChild(b);
    li.appendChild(up);

    inp.value = "";
  } else {
    editli.querySelector("span").innerText = inp.value;
    editli = null;
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    let par = e.target.parentElement;
    par.remove();
  }
  if (e.target.classList.contains("upd")) {
    let par = e.target.parentElement;

    let text = par.querySelector("span").innerText;
    inp.value = text;
    editli = par;
    console.log(par);
  }
});
