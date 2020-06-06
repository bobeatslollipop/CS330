var cur = 0;
var nav=[,,,], page=[,,,];
for (var i = 0; i < 4; i += 1) {
  nav[i] = document.getElementById("navitem"+i);
  page[i] = document.getElementById("page"+i);
}

function navTo(n) {
  if (cur === n) { return; }
  nav[n].setAttribute("style", "color: white; background-color: rgb(31, 206, 118); border: green 1px solid;");
  nav[cur].setAttribute("style", "color: black; background-color: white; border: 0px;");
  page[cur].style.display = "none";
  page[n].style.display = "block";
  cur = n;
}
function setStyle(elem, style)
{
 for (var property in style)
    elem.style[property] = style[property];
}