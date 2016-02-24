'use strict';

var picArray = [];


function PictureObject(picId, picPath){
  this.picId = picId;
  this.picPath = picPath;
  this.totalPicSightings = 0;
  this.totalUserClicks = 0;
  picArray.push(this);
}


var dog = new PictureObject('dog', 'img/dog-duck.jpg');
var boots = new PictureObject('boots', 'img/boots.jpg');
var chair = new PictureObject('chair', 'img/chair.jpg');
var bag = new PictureObject('bag', 'img/bag.jpg');
var banana = new PictureObject('banana', 'img/banana.jpg');
var bathroom = new PictureObject('bathroom', 'img/bathroom.jpg');
var breakfast = new PictureObject('breakfast', 'img/breakfast.jpg');
var bubblegum = new PictureObject('bubblegum', 'img/bubblegum.jpg');
var cthulhu = new PictureObject('cthulhu', 'img/cthulhu.jpg');
var dragon = new PictureObject('dragon', 'img/dragon.jpg');
var pen = new PictureObject('pen', 'img/pen.jpg');
var petSweep = new PictureObject('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new PictureObject('scissors', 'img/scissors.jpg');
var shark = new PictureObject('shark', 'img/shark.jpg');
var sweep = new PictureObject('sweep', 'img/sweep.png');
var tauntaun = new PictureObject('tauntaun', 'img/tauntaun.jpg');
var unicorn = new PictureObject('unicorn', 'img/unicorn.jpg');
var usb = new PictureObject('usb', 'img/usb.gif');
var waterCan = new PictureObject('water can', 'img/water-can.jpg');
var wineGlass = new PictureObject('wine glass', 'img/wine-glass.jpg');

var picArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

PictureObject.prototype.render = function() {

PictureObject.prototype.displayImg = function(picArray) {

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
boots.render();
breakfast.render();
bubblegum.render();
chair.render();
cthulhu.render();
dog.render();
dragon.render();
pen.render();
petSweep.render();
scissors.render();
shark.render();
sweep.render();
tauntaun.render();
unicorn.render();
usb.render();
waterCan.render();
wineGlass.render();
