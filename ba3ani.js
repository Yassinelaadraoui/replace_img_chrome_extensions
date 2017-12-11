console.log("console");

//load file names in array
var files = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",

];

var imgs = document.getElementsByTagName('img');

for (var images of imgs) {
  var n = Math.floor(Math.random() * files.length);
  var file = 'img/' + files[n];
  var url = chrome.extension.getURL(file);
  images.src = url;
  console.log(url);
}
