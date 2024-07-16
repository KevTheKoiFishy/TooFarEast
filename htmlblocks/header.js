//mobile detection
function zoomBody(){
  if (window.innerWidth < 1400)
    {document.body.setAttribute("style", "zoom : " + (.9*window.innerWidth / 1400));}
  else
    {document.body.setAttribute("style", "zoom : 0.75");}
}
zoomBody();
window.addEventListener("resize", zoomBody);

let getSubpath = function(level){
  return window.location.pathname.replaceAll(".html", "").split("/")[level];
}
document.body.innerHTML +=
`
<div class="header">
  <a class="` +      (getSubpath(1) == ""              ? "active" : "inactive") + `" href="/">            Welcome            </a>
  <a class="` +      (getSubpath(1) == "posts"         ? "active" : "inactive") + `" href="/posts">       Posts              </a>
  <a class="` +      (getSubpath(1) == "ocean"         ? "active" : "inactive") + `" href="/ocean">       Ocean Awareness    </a>
  <a class="` +      (getSubpath(1) == "birdStudies"   ? "active" : "inactive") + `" href="/birdStudies"> Bird Studies       </a>
  <!-- <a class="` + (getSubpath(1) == "regions"       ? "active" : "inactive") + `" href="/regions">     Meet Asia     </a> -->
  <a class="` +      (getSubpath(1) == "team"          ? "active" : "inactive") + `" href="/team">        Meet the Team </a>
  <!-- <a class="` + (getSubpath(1) == "fundraise"     ? "active" : "inactive") + `" href="/fundraise">   Support       </a> -->
  <a class="` +      (getSubpath(1) == "PVSA"          ? "active" : "inactive") + `" href="/PVSA">        President's Award </a>
</div>
<marquee id="LatestNews" scrollmount="2"></marquee>
`;

/*
document.body.innerHTML +=
`
<div id="sidebar">
  <div id="sunset"></div>
  <div id="logo"><div id="logoIMG"></div></div>
  <div id="selectors">
  <div style="transform: translateX(-20px); width: 300px">🎓Learn About Asia!</div>
  </div>
</div>
`;
*/