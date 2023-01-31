<!--
        // China - Lily, Kevin
        // Mongolia - Yaelin 
        // Taiwan - Janet
        // South Korea - Amy, Yaelin
        // Japan - Lily, Nathan
        // Thailand - Jinnie
        // Philippines - Leila
        // Vietnam - Kevin
        // Indonesia - Kevin,Leila
        // Singapore - Yaelin, Nathan
        // Laos- Janet
        // Myanmar - Yaelin
        // Brunei-
        // Malaysia- Oliver, Nathan
        // Hong Kong - Nathan, Oliver
        -->

var countries = ["China", "Mongolia", "Taiwan", "South Korea",
                 "Japan", "Thailand", "Philippines", "Vietnam",
                 "Indonesia", "Singapore", "Laos", "Myanmar",
                 "Brunei", "Malaysia", "Hong Kong"
                 ].sort();
var subtopics = ["Food", "Music", "Dance", "Technology"];

var sidebarDIV = document.getElementById("selectors");

var HTMLToAdd = "";
for (var c = 0; c < countries.length; c++)
{
  HTMLToAdd += '<div id="selector_'+countries[c]+'">';
  HTMLToAdd += '<svg style="background: url(https://cdn.glitch.global/2f875abb-5388-450d-8613-bd657c26368b/'+countries[c]+');"></svg>';
  HTMLToAdd += countries[c];
  
  for (var s = 0; s < subtopics.length; s++)
    HTMLToAdd += '<div>' + subtopics[s] + '</div>';

  HTMLToAdd += '</div>'
}
sidebarDIV.innerHTML += HTMLToAdd;