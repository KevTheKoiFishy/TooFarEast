//mobile detection
function zoomBody(){
  if (window.innerWidth < 1400)
    {document.body.setAttribute("style", "zoom : " + (.9*window.innerWidth / 1400));}
  else
    {document.body.setAttribute("style", "zoom : 0.75");}
}
zoomBody();
window.addEventListener("resize", zoomBody);

document.body.innerHTML +=
`
<div class="header">
  <a class="` + (window.location.pathname.replaceAll(".html", "").split("/")[1] == ""           ? "active" : "inactive") + `" href="/">          Welcome       </a>
  <a class="` + (window.location.pathname.replaceAll(".html", "").split("/")[1] == "posts"      ? "active" : "inactive") + `" href="/posts">     Posts         </a>
  <!-- <a class="` + (window.location.pathname.replaceAll(".html", "").split("/")[1] == "regions"    ? "active" : "inactive") + `" href="/regions">   Meet Asia     </a> -->
  <a class="` + (window.location.pathname.replaceAll(".html", "").split("/")[1] == "team"       ? "active" : "inactive") + `" href="/team">      Meet the Team </a>
  <!-- <a class="` + (window.location.pathname.replaceAll(".html", "").split("/")[1] == "fundraise"  ? "active" : "inactive") + `" href="/fundraise"> Support       </a> -->
</div>
<marquee id="LatestNews" scrollmount="2"></marquee>

<div id="sidebar">
  <div id="sunset"></div>
  <div id="logo"><div id="logoIMG"></div></div>
  <div id="selectors">
  <div style="transform: translateX(-20px); width: 300px">🎓Learn About Asia!</div>
  </div>
</div>
`;