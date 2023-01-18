//Marquee Title
var titleTag = document.getElementsByTagName("title")[0];
var marqueeTitle = window.setInterval(
  function(){
    var titleText = titleTag.innerText;
    var newTitleText = titleText.substring(1, titleText.length) + titleText[0];
    titleTag.innerText = newTitleText;
  }
  , 300);

//Marquee Articles
var newsBar = document.getElementById("LatestNews");
var blogPosts =
[
  ["180 Rohingya Refugees Presumed Dead at Sea",     "1_180RohingyaDead.html"       ],
  ["A Review of China's Zero-Covid Days",            "2_ChinaZeroTolerance.html"    ],
  ["Iron Fist to Let it Rip - China's Reopening",    "3_LetItRip.html"              ],
];

for (var i = 0; i < blogPosts.length; ++i){
  newsBar.innerHTML += " • <a href=\"" + blogPosts[i][1] + "\">" + blogPosts[i][0] + "</a>";
}

//Content Blocks
var contentDIV  = document.getElementById("CONTENT");
var scrollerDIV = document.getElementById("SCROLLER");

for (var i = 0; i < content.length; ++i)
{
  var HTMLToAdd = "";
  
  switch (content[i].type)
  {
      
    case "Snippet":
      HTMLToAdd += '<div class="Snippet" style="background-image: url(' + content[i].image + ');" align="center">';
      HTMLToAdd += '<div class="light_overlay snippet"></div>';
      HTMLToAdd += '<h2>' + content[i].title + '</h2>';
      HTMLToAdd += '<div class="paragraph">' + content[i].para + '</div>';
      HTMLToAdd += "<div class=\"buttonContainer\">";
      HTMLToAdd += "<div class=\"buttonContainer\">";
      for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
        HTMLToAdd += "<a class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";

      HTMLToAdd += "</div></div>";
      contentDIV.innerHTML += HTMLToAdd;
      break;
      
    case "Article Snippet":
      HTMLToAdd += '<div class="Snippet Article" style="background-image: url(' + content[i].image + ');" align="left">';
      HTMLToAdd += '<div class="light_overlay snippet article"></div>';
      HTMLToAdd += '<h2>' + content[i].title + '</h2>';
      HTMLToAdd += '<h3>' + content[i].subtitle + '</h3>';
      HTMLToAdd += '<h4>' + content[i].date + '</h4>';
      HTMLToAdd += '<div class="paragraph">' + content[i].para + '</div>';
      HTMLToAdd += "<div class=\"buttonContainer\">";
      for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
        HTMLToAdd += "<a class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";

      HTMLToAdd += "</div></div>";
      contentDIV.innerHTML += HTMLToAdd;
      break;
      
    case "Biography":
      
      HTMLToAdd += '<div class="snippet Biography" style="background-image: url(' + content[i].image + ');" align="center">';
      HTMLToAdd += '<div class="light_overlay biography"></div>';
      HTMLToAdd += '<h2>' + content[i].name + '</h2>';
      HTMLToAdd += '<div class="rolesList">';
        for (var j = 0; j < content[i].roles.length; ++j){
          HTMLToAdd += content[i].roles[j] + "<br>";
        }
        HTMLToAdd += "</div>"
      HTMLToAdd += '<div class="paragraph">' + content[i].statement + '</div>';
      
      HTMLToAdd += "</div>";
      scrollerDIV.innerHTML += HTMLToAdd;
      break;
  }
  
}