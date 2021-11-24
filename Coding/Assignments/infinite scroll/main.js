const preText = "Masai Student ";

const insideBox = document.querySelector("#insideBox");
let i = 1;
let x = 15;

const createNew = () => {
  while (i <= x) {
    let Div = document.createElement("div");
    let para = document.createElement("h3");
    para.innerText = `${preText} ${i}`;
    Div.append(para);
    insideBox.append(Div);
    i++;
  }

  x = i + 15;
};
createNew();


window.addEventListener("scroll", () => {


  window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
    ?
    createNew() : ""


});
