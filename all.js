//mobile detection
function zoomBody(){
  if (window.innerWidth < 1400)
    {document.body.setAttribute("style", "zoom : " + (window.innerWidth / 1400));}
  else
    {document.body.setAttribute("style", "zoom : 1");}
}
window.addEventListener("load", zoomBody);
window.addEventListener("resize", zoomBody);

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
  ["China's Factory-style Education System",          "posts/A2_ChineseEducationSystem.html" ],
  ["Thailand's Air is in Danger",                     "posts/A1_ThailandAirPollution.html"   ],
  ["Hollywood - A Beacon of Hope",                    "posts/9_AsianOscarMilestone.html"     ],
  ["South Korea's Power Problem",                     "posts/8_SouthKoreaPowerProblem.html"  ],
  ["China's Economy Back On Track",                   "posts/7_ChinaEconomyRevitalized.html" ],
  ["The Hong Kong Housing Crisis",                    "posts/6_HongKongHousingCrisis.html"   ],
  // ["Lunar New Year is More Than Chinese",             "posts/5_MoreThanTheMajority.html"     ],
  // ["Comparing the Myanmar Coup and Gwangju Uprising", "posts/4_LongFightToDemocracy.html"    ],
  // ["Iron Fist to Let it Rip - China's Reopening",     "posts/3_LetItRip.html"                ],
  // ["A Review of China's Zero-Covid Days",             "posts/2_ChinaZeroTolerance.html"      ],
  // ["180 Rohingya Refugees Presumed Dead at Sea",      "posts/1_180RohingyaDead.html"         ],
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
        HTMLToAdd += '<div class="Snippet" align="center" style="background-image: url(' + content[i].image + ');">';
        HTMLToAdd += '<h2>' + content[i].title + '</h2>';
        HTMLToAdd += '<div class="paragraph">' + content[i].para + '</div>';
        HTMLToAdd += "<div class=\"buttonContainer\">";
        for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
          HTMLToAdd += "<a class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";
        
        HTMLToAdd += "</div>";
        HTMLToAdd += '<div class="light_overlay snippet article"></div>';
        HTMLToAdd += "</div>";
        contentDIV.innerHTML += HTMLToAdd;
        break;

      case "Article Snippet":
        HTMLToAdd += '<div class="Snippet Article" style="background-image: url(' + content[i].image + ');" align="left">';
        HTMLToAdd += '<h2>' + content[i].title + '</h2>';
        HTMLToAdd += '<span class="date">' + content[i].date + '</span>';
        HTMLToAdd += '<span class="subtitle">' + content[i].subtitle + '</span>';
        HTMLToAdd += '<div  class="paragraph">' + content[i].para + '</div>';
        HTMLToAdd += "<div  class=\"buttonContainer\">";
        for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
          HTMLToAdd += "<a class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";
        
        HTMLToAdd += "</div>";
        HTMLToAdd += '<div class="light_overlay snippet article"></div>';
        HTMLToAdd += "</div>";
        contentDIV.innerHTML += HTMLToAdd;
        break;

      case "Biography":
        scrollerDIV.setAttribute("style", "width: " + (600*content.length) + "px;");
        HTMLToAdd += '<div class="snippet biography" style="background-image: url(' + content[i].image + ');" align="center">';
        HTMLToAdd += '<div class="light_overlay biography" style="background: hsl(' + (360 * i / content.length) + 'deg 100% 92% / 90%)"></div>';
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

// reinterpret ASCII  