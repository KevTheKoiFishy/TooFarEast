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
  ["180 Rohingya Refugees Presumed Dead at Sea", ""],
  ["A Review of China's Zero-Covid Days", ""],
  ["Iron Fist to Let it Rip - China's Reopening", ""]
];

for (var i = 0; i < blogPosts.length; ++i){
  newsBar.innerHTML += " • <a href=\"" + blogPosts[i][1] + "\">" + blogPosts[i][0] + "</a>";
}

//Content Blocks
var contentDIV = document.getElementById("CONTENT");

for (var i = 0; i < content.length; ++i)
{
  var HTMLToAdd = "";
  switch (content[i].type)
  {
    case "Snippet":
      HTMLToAdd += '<div class="Snippet" style="background-image: url(' + content[i].image + ');" align="center"><div class="light_overlay snippet"></div><h2>' + content[i].title + '</h2><div class="paragraph">' + content[i].para + '</div>';
      HTMLToAdd += "<div class=\"buttonContainer\">";
      for (var buttonNum = 0; buttonNum < content[i].buttons.length; ++buttonNum)
        HTMLToAdd += "<a class=\"button\" href=\"" + content[i].buttons[buttonNum][1] + "\">" + content[i].buttons[buttonNum][0] + "</a>";

      HTMLToAdd += "</div></div>"
      break;
  }
  contentDIV.innerHTML += HTMLToAdd;
}