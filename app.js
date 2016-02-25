'use strict';

var imageData = [];
var globalClickCounter = [];

function FocusGroupData (imageName,imageId,imagePath) {
    this.imageName = imageName;
    this.imageId = imageId;
    this.imagePath = imagePath;
    this.imageDisplayedCount = 0;
    this.totalClickCount = 0;
    this.timesUserChoseRightImage = 0;
    this.timesUserChoseLeftImage = 0;
    this.timesUserChoseCenterImage = 0;
    imageData.push(this);
}
// line 13 allows for all instances of FocusGroupData to be pushed into a global array for easier access.

var dog = new FocusGroupData('Dog-Duckbill','dog','img/dog-duck.png');
var boots = new FocusGroupData('Open-Toe-Boots','boots','img/boots.png');
var chair = new FocusGroupData('Chair','Chair','img/chair.png');
var bag = new FocusGroupData('R2D2-Bag','bag','img/bag.png');
var banana = new FocusGroupData('Banana-Cutter','banana','img/banana.png');
var bathroom = new FocusGroupData('Ipad-Tp-Holder','bathroom','img/bathroom.png');
var breakfast = new FocusGroupData('Breakfast-Making-Machine','breakfast','img/breakfast.png');
var bubblegum = new FocusGroupData('Meatball-Bubblegum','bubblegum','img/bubblegum.png');
var cthulhu = new FocusGroupData('Cthulhu-Toy','cthulhu','img/cthulhu.png');
var dragon = new FocusGroupData('Dragon-Meat','dragon','img/dragon.png');
var pen = new FocusGroupData('Pen-Cutlery','pen','img/pen.png');
var petSweep = new FocusGroupData('Pet-Sweep-Dust-Boots','pet-sweep','img/pet-sweep.png');
var scissors = new FocusGroupData('Pizza-Scissors', 'scissors','img/scissors.png');
var shark = new FocusGroupData('Shark-Sleeping-Bag','shark','img/shark.png');
var sweep = new FocusGroupData('Sweeping-Baby-Clothes','sweep','img/sweep.png');
var tauntaun = new FocusGroupData('Tauntaun-Sleeping-Bag','tauntaun','img/tauntaun.png');
var unicorn = new FocusGroupData('Unicorn-Meat','unicorn','img/unicorn.png');
var usb = new FocusGroupData('Animated-Usb-Tentacle','usb','img/usb.gif');
var waterCan = new FocusGroupData('Water-Can','waterCan','img/water-can.png');
var wineGlass = new FocusGroupData('Wine-Glass','wineGlass','img/wine-glass.png');

function button() {
  if (globalClicks < imageData.length) {
    document.getElementById('more votes').style.visibility = 'hidden';

  } else {

    document.getElementById('view results').style.visibility = 'visible';
  }
}

FocusGroupData.prototype.render = function() {




    FocusGroupData.prototype.fetchRandomImages = function () {
    return Math.floor((Math.random() * imageData.length)) ;
  }

  FocusGroupData.prototype.displayThreeRandomImages= function() {
  var img1 = fetchRandomImages();
  var img2 = fetchRandomImages();
  var img3 = fetchRandomImages();

  while (img1 === img2) {
  img2 = fetchRandomImages();
}
  while (img1 === img2 || img2 === img3 || img3 === img1) {
  img3 = fetchRandomImages();
}
return [img1,img2,img3];
}

FocusGroupData.prototype.imagePlacement = function() {
  var newImage = document.createElement('img');
  newImage.src = this.imagePath;
  newImage.id = this.imageId;
  document.body.appendChild(newImage);
}
imageData.push(this);
}







bag.render();
banana.render();
bathroom.render();
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
