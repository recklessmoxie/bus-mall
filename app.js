'strict';

function PicChanger(picName, picPath) {
  this.picName = picName;
  this.picPath = picPath;
  this.timesShown = [];
  this.timesClicked = [];
}

var dogDuck = new PicChanger('dog duck');
var dogPic = [];

var boots = new PicChanger('boots');
var bootsPic = [];

var chair = new PicChanger('chair');
var chairPic = [];

var dogEl = document.getElementById('dog duck');
var bootsEl = document.getElementById('boots');
var chairEl = document.getElementById('chair');

var pics = ['dog duck', 'boots', 'chair'];


function randomPic(e) {
  var target = e.target;
}
  var el = document.getElementById('dog duck', 'boots', 'chair');

  var randomPic1 = Math.floor(Math.random() * pics.length);
  dogEl.textContent = pics[randomPic1];
  var randomPic2 = Math.floor(Math.random() * pics.length);
  bootsEl.textContent = pics[randomPic2];
  var randomPic3 = Math.floor(Math.random() * pics.length);
  chairEl.textContent = pics[randomPic3];
  el.addEventListener('click', 'dblclick', function(e) {
randomPic(e);
}, false);

PicChanger();
