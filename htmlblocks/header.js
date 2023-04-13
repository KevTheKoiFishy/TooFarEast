document.body.innerHTML +=
`
<div class="header">
  <a class="` + ((window.location.pathname.replaceAll(".html", "").split("/")[0] == "/"             ? "active" : "inactive") + `" href="/">              Welcome       </a>
  <a class="` + ((window.location.pathname.replaceAll(".html", "").split("/")[0] == "/post"   ? "active" : "inactive") + `" href="/posts.html">    Posts         </a>
  <a class="` + ((window.location.pathname.replaceAll(".html", "").split("/")[0] == "/tea"    ? "active" : "inactive") + `" href="/team.html">     Meet the Team </a>
  <a class="` + ((window.location.pathname.replaceAll(".html", "").split("/")[0] == "/contac" ? "active" : "inactive") + `" href="/contact.html">  Contact Us    </a>
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