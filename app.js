'use strict';

var picDisplay = [];


function PictureObject(picName, picPath){
  this.picName = picName;
  this.picPath = picPath;
  this.totalPicSightings = 0;
  this.totalUserClicks = 0;
  picDisplay.push(this);
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
var waterCan = new PictureObject('water-can', 'img/water-can.jpg');
var wineGlass = new PictureObject('wine-glass', 'img/wine-glass.jpg');


var picRandomizer= function () {
  return Math.floor(Math.random() * picArray.length);
}




// PictureObject.prototype.displayImg = function() {
// var ObjectArray = [pen,petSweep,scissors,dog];
//   for(var i = 0; i < ObjectArray.length; i++){
//  var newImage = document.createElement('img');
//  newImage.src = ObjectArray.picPath[i];
//  document.body.appendChild(newImage);
// }
// }
var picDisplay = [dog, chair, boots, bag, banana, bathroom, breakfast, bubblegum, cthulhu, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
// wrote this long ridiculousness to show I can make it work somehow.//


  function displayImg(picDisplay){
    var newImage = document.createElement('img');
    newImage.src = picDisplay.path;
    document.body.appendChild(newImage)
  }

    // displayImg(dog.picPath);
    // displayImg(chair.picPath);
    // displayImg(boots.picPath);
    // displayImg(bag.picPath);
    // displayImg(banana.picPath);
    // displayImg(bathroom.picPath);
    // displayImg(breakfast.picPath);
    // displayImg(bubblegum.picPath);
    // displayImg(pen.picPath);
    // displayImg(cthulhu.picPath);
    // displayImg(dragon.picPath);
    // displayImg(petSweep.picPath);
    // displayImg(scissors.picPath);
    // displayImg(shark.picPath);
    // displayImg(sweep.picPath);
    // displayImg(tauntaun.picPath);
    // displayImg(unicorn.picPath);
    // displayImg(usb.picPath);
    // displayImg(waterCan.picPath);
    // displayImg(wineGlass.picPath);


// dogEl.addEventListener('click','dblclick', randomPic, true);
