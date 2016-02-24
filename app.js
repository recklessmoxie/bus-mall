'use strict';

var ObjectArray = [];

function PictureObject(picName, picPath){
  this.picName = picName;
  this.picPath = picPath;
  this.timesShown = 0;
  this.timesClicked = 0;
}


var dog = new PictureObject('dog', 'img/dog-duck.jpg');
var boots = new PictureObject('boots', 'img/boots.jpg');
var chair = new PictureObject('chair', 'img/chair.jpg');
var bag = new PictureObject('bag', 'img/bag.jpg');
var banana = new PictureObject('banana', 'img/banana.jpg');
var bathroom = new PictureObject('bathroom', 'img/bathroom.jpg');
var breakfast = new PictureObject('breakfast', 'img/breakfast.jpg');
var bubblegum = new PictureObject('bubblegum', 'img/bubblegum.jpg');
var cthulhu = new PictureObject('cthulu', 'img/cthulu.jpg');
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


// Trying to make this work, dont understand why it doesnt.

// PictureObject.prototype.displayImg = function() {
// var ObjectArray = [pen,petSweep,scissors,dog];
//   for(var i = 0; i < ObjectArray.length; i++){
//  var newImage = document.createElement('img');
//  newImage.src = ObjectArray.picPath[i];
//  document.body.appendChild(newImage);
// }
// }

// wrote this long ridiculousness to show I can make it work somehow.//


  function displayImg(picPath){
    var newImage = document.createElement('img');
    newImage.src = picPath
    document.body.appendChild(newImage)
  }

    displayImg(dog.picPath);
    displayImg(chair.picPath);
    displayImg(boots.picPath);
    displayImg(bag.picPath);
    displayImg(banana.picPath);
    displayImg(bathroom.picPath);
    displayImg(breakfast.picPath);
    displayImg(bubblegum.picPath);
    displayImg(pen.picPath);
    displayImg(cthulhu.picPath);
    displayImg(dragon.picPath);
    displayImg(petSweep.picPath);
    displayImg(scissors.picPath);
    displayImg(shark.picPath);
    displayImg(sweep.picPath);
    displayImg(tauntaun.picPath);
    displayImg(unicorn.picPath);
    displayImg(usb.picPath);
    displayImg(waterCan.picPath);
    displayImg(wineGlass.picPath);
//   function picRandomizer() {
//   var randomPic1 = Math.floor(Math.random() * pics.length);
//   dogEl.textContent = pics[randomPic1];
//   var randomPic2 = Math.floor(Math.random() * pics.length);
//   bootsEl.textContent = pics[randomPic2];
//   var randomPic3 = Math.floor(Math.random() * pics.length);
//   chairEl.textContent = pics[randomPic3];
// }


// dogEl.addEventListener('click','dblclick', randomPic, true);
