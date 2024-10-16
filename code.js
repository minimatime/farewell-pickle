
var SPREADSHEET_ID = "1d8vWa0DH3_U91bnHHys6ephanFJXggH1KrsVn1BmhXI";
var TAB_NAME = "Responses";

/* 
These are two variables (containers for data) that you need to replace with your own information.

1. SPREADSHEET_ID: To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  2. TAB_NAME is just the name of your spreadsheet tab. Write it as it is (it's case-sensitive!). 
    –– The default Google Sheet tab is Sheet1.
    –– This also accepts the tab number, in order
  
*/

/* 
   Link to the example spreadsheet: https://docs.google.com/spreadsheets/d/1ndp1b_EgDONxhSEa9rd6N80Y_oEvI57cNbqO9EMUIGQ/edit#gid=0
*/
let list = [];
console.log("pls don't look at this code, she's a bit ugly 🤡 - siri + natasha");

$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
     // go over everything in data and run the code below
    data.forEach(function (entry, index) {
      if (index == 0) return;
      list.push(entry);
      $('#entries').append(`<div class = "yuh"> 
            <img src='` + getImage(entry.pic) + `'>
            <h2 class ="name">` + entry.name + entry.emoji + `</h2>
            <h3 class ="loc">` + entry.location + `</h3>
            <button style="font-family: monospace;" id="button-` + index + `">` + "click here for feels 💛" +`</button>
            <p style="display:none" id= "message-` + index + `">` + entry.msg + `</p>
         </div>`)
      $("#button-" + index).click(function(){
            $("#message-" + index).toggle();
          });
      
    });
  });  
});

// list.forEach((entry) => document.body.appendChild(createEntryDiv(entry)));
  
function getImage(driveURL) {
  return driveURL.replace("open?", "uc?export=view&");
}




// thank you https://github.com/benborgers/opensheet
