'use strict';

var productImageData = [];
var globalClickCounter = 0;
var img1;
var img2;
var img3;
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var imageSection = document.getElementById('hide');

function ProductData (imageName,imageId,imagePath) {
    this.imageName = imageName;
    this.imageId = imageId;
    this.imagePath = imagePath;
    this.imageDisplayedCount = 0;
    this.totalClickCount = 0;
    productImageData.push(this);
}
// line 13 allows for all instances of ProductData to be pushed into a global array for easier access.

var dog = new ProductData('Dog-Duckbill','dog','img/dog-duck.png');
var boots = new ProductData('Open-Toe-Boots','boots','img/boots.png');
var chair = new ProductData('Chair','Chair','img/chair.png');
var bag = new ProductData('R2D2-Bag','bag','img/bag.png');
var banana = new ProductData('Banana-Cutter','banana','img/banana.png');
var bathroom = new ProductData('Ipad-Tp-Holder','bathroom','img/bathroom.png');
var breakfast = new ProductData('Breakfast-Making-Machine','breakfast','img/breakfast.png');
var bubblegum = new ProductData('Meatball-Bubblegum','bubblegum','img/bubblegum.png');
var cthulhu = new ProductData('Cthulhu-Toy','cthulhu','img/cthulhu.png');
var dragon = new ProductData('Dragon-Meat','dragon','img/dragon.png');
var pen = new ProductData('Pen-Cutlery','pen','img/pen.png');
var petSweep = new ProductData('Pet-Sweep-Dust-Boots','pet-sweep','img/pet-sweep.png');
var scissors = new ProductData('Pizza-Scissors', 'scissors','img/scissors.png');
var shark = new ProductData('Shark-Sleeping-Bag','shark','img/shark.png');
var sweep = new ProductData('Sweeping-Baby-Clothes','sweep','img/sweep.png');
var tauntaun = new ProductData('Tauntaun-Sleeping-Bag','tauntaun','img/tauntaun.png');
var unicorn = new ProductData('Unicorn-Meat','unicorn','img/unicorn.png');
var usb = new ProductData('Animated-Usb-Tentacle','usb','img/usb.gif');
var waterCan = new ProductData('Water-Can','waterCan','img/water-can.png');
var wineGlass = new ProductData('Wine-Glass','wineGlass','img/wine-glass.png');


function randomImagePlacement () {
var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');
}

function randomNumberArray() {
  return Math.floor((Math.random() * ProductImageData.length));
  }

function randomImageArray() {
   img1 = randomNumberArray();
   img2 = randomNumberArray();
   img3 = randomNumberArray();

  while (img1 === img2) {
  img2 = randomNumberArray();
  }
  while (img1 === img2 || img2 === img3 || img3 === img1) {
  img3 = randomNumberArray();
  }
  return [img1,img2,img3];
  }

function displayThreeImages() {
  var threeRandomNumbers = randomImageArray();
  console.log(threeRandomNumbers);
  for(var i = 0; i < threeRandomNumbers.length; i++) {
    var index = threeRandomNumbers[i];
    var object = ProductImageData[index];
    object.randomImagePlacement();
  }
};

displayThreeImages();

image1.addEventListener('click', handleClickOnFirst);
image2.addEventListener('click', handleClickOnSecond);
image3.addEventListener('click', handleClickOnThird);
displayThreeImages();

function showResultsButton() {
  if (globalClickCounter < ProductImageData.length) {
    document.getElementById('view results').style.visibility = 'hidden';

  } else {

    document.getElementById('view results').style.visibility = 'visible';
  }
}

function showMoreVotesButton() {
  if (globalClickCounter < ProductImageData.length) {
    document.getElementById('more votes').style.visibility = 'hidden';

  } else {

    document.getElementById('more votes').style.visibility = 'visible';
  }
}
