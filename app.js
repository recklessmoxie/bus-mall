'use strict';

// var imageData = [];
// var randomArray = [];

function FocusGroupData (imageName, imageId, imagePath) {
    this.imageName = imageName;
    this.imageId = 'Product Image';
    this.imagePath = imagePath;
    this.imageDisplayedCount = 0;
    this.totalClickCount = 0;
    this.timesUserChoseRightImage = 0;
    this.timesUserChoseLeftImage = 0;
    this.timesUserChoseCenterImage = 0;
    arrayOfImages.push(this);
}
// line 13 allows for all instances of FocusGroupData to be pushed into a global array for easier access.

var dog = new FocusGroupData('Dog-Duckbill', 'img/dog-duck.png');
var boots = new FocusGroupData('Open-Toe-Boots', 'img/boots.png');
var chair = new FocusGroupData('Chair', 'img/chair.png');
var bag = new FocusGroupData('R2D2-Bag', 'img/bag.png');
var banana = new FocusGroupData('Banana-Cutter', 'img/banana.png');
var bathroom = new FocusGroupData('Ipad-Tp-Holder', 'img/bathroom.png');
var breakfast = new FocusGroupData('Breakfast-Making-Machine', 'img/breakfast.png');
var bubblegum = new FocusGroupData('Meatball-Bubblegum', 'img/bubblegum.png');
var cthulhu = new FocusGroupData('Cthulhu-Toy', 'img/cthulhu.png');
var dragon = new FocusGroupData('Dragon-Meat', 'img/dragon.png');
var pen = new FocusGroupData('Pen-Cutlery', 'img/pen.png');
var petSweep = new FocusGroupData('Pet-Sweep-Dust-Boots', 'img/pet-sweep.png');
var scissors = new FocusGroupData('Pizza-Scissors', 'img/scissors.png');
var shark = new FocusGroupData('Shark-Sleeping-Bag', 'img/shark.png');
var sweep = new FocusGroupData('Sweeping-Baby-Clothes', 'img/sweep.png');
var tauntaun = new FocusGroupData('Tauntaun-Sleeping-Bag', 'img/tauntaun.png');
var unicorn = new FocusGroupData('Unicorn-Meat', 'img/unicorn.png');
var usb = new FocusGroupData('Animated-Usb-Tentacle', 'img/usb.gif');
var waterCan = new FocusGroupData('Water-Can', 'img/water-can.png');
var wineGlass = new FocusGroupData('Spill-Guaranteed-Wine-Glass', 'img/wine-glass.png');


FocusGroupData.prototype.render = function() {

//   This will be the event listener once I figure out the randomizer, i think
// dogEl.addEventListener('click','dblclick', randomPic, true);

FocusGroupData.prototype.displayRandomPic = function () {
    return Math.floor(Math.random() * arrayOfImages.length) ;

}


FocusGroupData.prototype.imagePlacement = function() {

 var newImage = document.createElement('img');
 newImage.src = this.imagePath;
 newImage.id = this.imageId;
 document.body.appendChild(newImage);

 this.imageDisplayedCount++;

 };
this.imagePlacement();
this.displayRandomPic();
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
