String.prototype.isExternalLink = function(){
  let nativeLinkStart = ["../", "/", "//", "#"];
  let isNativeLink = true;
  nativeLinkStart.forEach( (value) => {
    if (this.substring(0, value.length) == value)
    isNativeLink = false;
  });
  return isNativeLink;
}

//Scrolling Title
var titleTag = document.getElementsByTagName("title")[0];
var marqueeTitle =
    function () {
      window.setInterval(
      function(){
        var titleText = titleTag.innerText;
        var newTitleText = titleText.substring(1, titleText.length) + titleText[0];
        titleTag.innerText = newTitleText;
      }
      , 300);
    }
    window.setTimeout(marqueeTitle, 5000);

//Marquee Articles
var newsBar = document.getElementById("LatestNews");
var blogPosts =
[
  ["India vs. Pakistan",                              "/posts/B3_Cricket.html"                ],
  ["Korea's Stabbing and Death-Threat Trend",         "/posts/B1_KoreaStabbing.html"          ],
  ["Doksuri's Destructive Wake",                      "/posts/B0_TyphoonDoksuri.html"         ],
  ["Coco's Death Sparks Attention to Mental Health",  "/posts/A9_CocoLeeDeath.html"           ],
  ["The Fading Next Generations of East Asia",        "/posts/A8_DecliningBirthRates.html"    ],
  ["The End of Affirmative Action?",                  "/posts/A7_AffirmativeActionCase.html"  ],
  ["It's AAPI Month!",                                "/posts/A6_AAPIMonth.html"              ],
  ["The Tiktok Controversy Explained",                "/posts/A5_TikTokBan.html"              ],
  ["2 Arrested for Water-Splashing HK Police",        "/posts/A4_SongkranPoliceIncident.html" ],
  ["The Book Rescuers",                               "/posts/A2_TheBookRescuers.html"        ],
  ["China's Factory-style Education System",          "/posts/A1_ChineseEducationSystem.html" ],
  // ["Thailand's Air is in Danger",                     "/posts/A0_ThailandAirPollution.html"   ],
  // ["Hollywood - A Beacon of Hope",                    "/posts/9_AsianOscarMilestone.html"     ],
  // ["South Korea's Power Problem",                     "/posts/8_SouthKoreaPowerProblem.html"  ],
  // ["China's Economy Back On Track",                   "/posts/7_ChinaEconomyRevitalized.html" ],
  // ["The Hong Kong Housing Crisis",                    "/posts/6_HongKongHousingCrisis.html"   ],
  // ["Lunar New Year is More Than Chinese",             "/posts/5_MoreThanTheMajority.html"     ],
  // ["Comparing the Myanmar Coup and Gwangju Uprising", "/posts/4_LongFightToDemocracy.html"    ],
  // ["Iron Fist to Let it Rip - China's Reopening",     "/posts/3_LetItRip.html"                ],
  // ["A Review of China's Zero-Covid Days",             "/posts/2_ChinaZeroTolerance.html"      ],
  // ["180 Rohingya Refugees Presumed Dead at Sea",      "/posts/1_180RohingyaDead.html"         ],
];

for (var i = 0; i < blogPosts.length; ++i){
  newsBar.innerHTML += "<a href=\"" + blogPosts[i][1] + "\">" + blogPosts[i][0] + "</a>";
}

// Content Blocks
var contentDIV  = document.getElementById("CONTENT");
var scrollerDIV = document.getElementById("SCROLLER");

for (var i = 0; i < content.length; ++i)
{
  var HTMLToAdd = "";

  switch (content[i].type)
  {

    case "Snippet":
      HTMLToAdd += '<div class="Snippet ' + ((content[i].align) ? content[i].align : '')
                + '" style="background-image: url(' + content[i].image + ');'
                + (content[i].width ? '--snippet-content-width: ' + content[i].width + '%;' : '')
                + '">';

      HTMLToAdd += '<div class="wordsContainer" style="background-image: background-image: inherit;">';
      HTMLToAdd += '<h2>' + content[i].title + '</h2>';
      HTMLToAdd += '<div class="paragraph">' + content[i].para + '</div>';
      HTMLToAdd += "</div>";

      HTMLToAdd += "<div class=\"buttonContainer\">";
      for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
      HTMLToAdd += "<a " + (content[i].buttons[buttonNum][1].isExternalLink() ? 'target="_blank" rel="noopener noreferrer"' : '')
                + "class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";
      HTMLToAdd += "</div>";

      HTMLToAdd += '<div class="light_overlay"></div>';

      HTMLToAdd += "</div>";
      contentDIV.innerHTML += HTMLToAdd;
      break;

    case "Article Snippet":
      HTMLToAdd += '<div class="Snippet Article" style="background-image: url(' + content[i].image + ');">';

      HTMLToAdd += '<div class="wordsContainer" style="background-image: inherit;">';
      HTMLToAdd += '<h2>'                     + content[i].title    + '</h2>';
      HTMLToAdd += '<span class="date">'      + content[i].date     + '</span>';
      HTMLToAdd += '<span class="subtitle">'  + content[i].subtitle + '</span>';
      HTMLToAdd += '<div  class="paragraph">' + content[i].para     + '</div>';
      HTMLToAdd += "</div>";

      HTMLToAdd += "<div  class=\"buttonContainer\">";
      for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
      HTMLToAdd += "<a class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";
      HTMLToAdd += "</div>";

      HTMLToAdd += '<div class="light_overlay"></div>';

      HTMLToAdd += "</div>";
      contentDIV.innerHTML += HTMLToAdd;
      break;

    case "Biography":
      scrollerDIV.setAttribute("style", "width: " + (600*content.length) + "px;");
      HTMLToAdd += '<div class="Snippet Biography" style="background-image: url(' + content[i].image + ');" align="center">';
      HTMLToAdd += '<div class="light_overlay" style="background: hsl(' + (360 * i / content.length) + 'deg 100% 92% / 90%)"></div>';
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
  
    case "Embed":
      HTMLToAdd += `<iframe class="Embed" id="${content[i].id}" src="${content[i].url}" style="height:${content[i].height}px;"></iframe>`;
      contentDIV.innerHTML += HTMLToAdd;
      break;
  }

}