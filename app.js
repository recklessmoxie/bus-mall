'use strict';

var picArray = [];
var randomArray = [];

function PictureObject(picId, picPath){
  this.picId = picId;
  this.picPath = picPath;
  this.totalPicSightings = 0;
  this.totalUserClicks = 0;
  picArray.push(this);
}


var dog = new PictureObject('dog', 'img/dog-duck.png');
var boots = new PictureObject('boots', 'img/boots.png');
var chair = new PictureObject('chair', 'img/chair.png');
var bag = new PictureObject('bag', 'img/bag.png');
var banana = new PictureObject('banana', 'img/banana.png');
var bathroom = new PictureObject('bathroom', 'img/bathroom.png');
var breakfast = new PictureObject('breakfast', 'img/breakfast.png');
var bubblegum = new PictureObject('bubblegum', 'img/bubblegum.png');
var cthulhu = new PictureObject('cthulhu', 'img/cthulhu.png');
var dragon = new PictureObject('dragon', 'img/dragon.png');
var pen = new PictureObject('pen', 'img/pen.png');
var petSweep = new PictureObject('pet-sweep', 'img/pet-sweep.png');
var scissors = new PictureObject('scissors', 'img/scissors.png');
var shark = new PictureObject('shark', 'img/shark.png');
var sweep = new PictureObject('sweep', 'img/sweep.png');
var tauntaun = new PictureObject('tauntaun', 'img/tauntaun.png');
var unicorn = new PictureObject('unicorn', 'img/unicorn.png');
var usb = new PictureObject('usb', 'img/usb.gif');
var waterCan = new PictureObject('water can', 'img/water-can.png');
var wineGlass = new PictureObject('wine glass', 'img/wine-glass.png');


PictureObject.prototype.render = function() {

PictureObject.prototype.displayRandomPic = function () {
  return Math.floor(Math.random() * picArray.length);
}


PictureObject.prototype.displayImg = function() {

 var newImage = document.createElement('img');
 newImage.src = this.picPath;
 newImage.id = this.picId;
 document.body.appendChild(newImage);

 this.totalPicSightings++;

 };
this.displayImg();
}



bag.render();
banana.render();
bathroom.render();// dogEl.addEventListener('click','dblclick', randomPic, true);
// boots.render();
// breakfast.render();
// bubblegum.render();
// chair.render();
// cthulhu.render();
// dog.render();
// dragon.render();
// pen.render();
// petSweep.render();
// scissors.render();
// shark.render();
// sweep.render();
// tauntaun.render();
// unicorn.render();
// usb.render();
// waterCan.render();
// wineGlass.render();
