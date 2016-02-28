'use strict';

var productImageData = [];
var globalClickCounter = 0;
var img1;
var img2;
var img3;
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

function ProductData(imageName, imageId, imagePath) {
  this.imageName = imageName;
  this.imageId = imageId;
  this.imagePath = imagePath;
  this.imageDisplayedCount = 0;
  this.totalClickCount = 0;
  productImageData.push(this);
}
// line 13 allows for all instances of ProductData to be pushed into a global array for easier access.
var bag = new ProductData('R2D2 Bag', 'bag', 'img/bag.png');
var banana = new ProductData('Banana Cutter', 'banana', 'img/banana.png');
var boots = new ProductData('Open Toe Boots', 'boots', 'img/boots.png');
var bathroom = new ProductData('Ipad Tp Holder', 'bathroom', 'img/bathroom.png');
var breakfast = new ProductData('Breakfast Machine', 'breakfast',
  'img/breakfast.png');
var bubblegum = new ProductData('Meatball Bubblegum', 'bubblegum',
  'img/bubblegum.png');
var chair = new ProductData('Chair', 'Chair', 'img/chair.png');
var cthulhu = new ProductData('Cthulhu Toy', 'cthulhu', 'img/cthulhu.png');
var dog = new ProductData('Dog Duckbill', 'dog', 'img/dog-duck.png');
var dragon = new ProductData('Dragon Meat', 'dragon', 'img/dragon.png');
var pen = new ProductData('Pen Cutlery', 'pen', 'img/pen.png');
var petSweep = new ProductData('Pet Sweep Booties', 'pet-sweep',
  'img/pet-sweep.png');
var scissors = new ProductData('Pizza Scissors', 'scissors', 'img/scissors.png');
var shark = new ProductData('Shark Sleeping Bag', 'shark', 'img/shark.png');
var sweep = new ProductData('Sweeping Baby Clothes', 'sweep', 'img/sweep.png');
var tauntaun = new ProductData('Tauntaun Sleeping Bag', 'tauntaun',
  'img/tauntaun.png');
var unicorn = new ProductData('Unicorn Meat', 'unicorn', 'img/unicorn.png');
var usb = new ProductData('Usb Tentacle', 'usb', 'img/usb.gif');
var waterCan = new ProductData('Water Can', 'waterCan', 'img/water-can.png');
var wineGlass = new ProductData('Wine Glass', 'wineGlass', 'img/wine-glass.png');

function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

console.log(getRandomArrayElements(productImageData, 3));

function PageDisplay() {
  var image1 = document.getElementById('pic1');
  image1.src = productImageData[0].imagePath;
  document.body.appendChild(image1);

  var image2 = document.getElementById('pic2');
  image2.src = productImageData[1].imagePath;
  document.body.appendChild(image2);

  var image3 = document.getElementById('pic3');
  image3.src = productImageData[2].imagePath;
  document.body.appendChild(image3);
}


// document.addEventListener('DOMContentLoaded', function(event) {
//   document.getElementById('pic1').addEventListener('click', displayNewImagesOnClick);
//   document.getElementById('pic2').addEventListener('click', displayNewImagesOnClick);
//   document.getElementById('pic3').addEventListener('click', displayNewImagesOnClick);
//
//   function displayNewImagesOnClick() {
//
//   }
// });



// function newImageOnClick () {
//   image1.addEventListener